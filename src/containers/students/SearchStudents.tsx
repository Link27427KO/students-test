import { FC } from 'react'
import { InputText } from 'primereact/inputtext'
import ExportCSVIcon from '../../images/ExportCSVIcon'

interface ISearchStudentsProps {
  searchInput: string | undefined
  setSearchInput: (value: any) => void
  searchRequest: (props: { search: string | undefined }) => void
}

const SearchStudents: FC<ISearchStudentsProps> = (props: ISearchStudentsProps) => {
  const { searchInput, setSearchInput, searchRequest } = props
  return (
    <div className="students-filters-menu-div">
      <div className="students-filters-menu-div-students">STUDENTS</div>
      <div>
        <span className="p-input-icon-right search-input-span">
          <i className="pi pi-search" />
          <InputText
            className="search-input"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                searchRequest({ search: searchInput ?? undefined })
              }
            }}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter Student Name, Parent or ID here"
          />
        </span>
      </div>
      <div className="students-filters-menu-div-csv">
        <span className="students-filters-menu-div-csv-icon">
          <ExportCSVIcon />
        </span>
        EXPORT CSV
      </div>
    </div>
  )
}
export default SearchStudents
