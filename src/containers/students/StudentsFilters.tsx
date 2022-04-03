import { FC } from 'react'
import SearchStudents from './SearchStudents'
import ExportStudentsCsv from './ExportStudentsCsv'

export interface IStudentsFiltersProps {
  selectedColumn: any
  setSelectedColumn: (value: any) => void
  searchInput: string | undefined
  setSearchInput: (value: any) => void
  searchRequest: (props: { search: string | undefined }) => void
}
export interface ICsvReportProps {
  data: any
  headers: { label: string; key: string }[]
  filename: string
}

const StudentsFilters: FC<IStudentsFiltersProps> = (props: IStudentsFiltersProps) => {
  const { selectedColumn, setSelectedColumn, setSearchInput, searchInput, searchRequest } = props
  const csvReport: ICsvReportProps = {
    data: selectedColumn
      ? selectedColumn.map((item: any) => {
          return {
            class: item.class,
            id: item.id,
            name: item.name,
            parents: item.parents.join('  '),
            score: item.score,
            speed: item.speed,
          }
        })
      : [],
    headers: [
      { label: 'Class', key: 'class' },
      { label: 'ID', key: 'id' },
      { label: 'Name', key: 'name' },
      { label: 'Parents', key: 'parents' },
      { label: 'Score', key: 'score' },
      { label: 'Speed', key: 'speed' },
    ],
    filename: 'Students.csv',
  }
  return (
    <div className="students-filters-menu">
      {!selectedColumn || selectedColumn.length === 0 ? (
        <SearchStudents searchInput={searchInput} setSearchInput={setSearchInput} searchRequest={searchRequest} />
      ) : (
        <ExportStudentsCsv
          selectedColumn={selectedColumn}
          setSelectedColumn={setSelectedColumn}
          csvReport={csvReport}
        />
      )}
    </div>
  )
}

export default StudentsFilters
