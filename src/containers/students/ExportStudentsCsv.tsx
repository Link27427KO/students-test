import { FC } from 'react'
import { CSVLink } from 'react-csv'
import { ICsvReportProps } from './StudentsFilters'

interface IExportStudentsCsvProps {
  selectedColumn: any
  setSelectedColumn: (value: any) => void
  csvReport: ICsvReportProps
}

const ExportStudentsCsv: FC<IExportStudentsCsvProps> = (props: IExportStudentsCsvProps) => {
  const { setSelectedColumn, selectedColumn, csvReport } = props
  return (
    <div className="students-filters-menu-selected">
      <div className="students-filters-menu-selected-stud">{selectedColumn.length} STUDENT SELECTED</div>
      <div className="students-filters-menu-selected-divs">
        <div className="students-filters-menu-selected-divs-cancel" onClick={() => setSelectedColumn(null)}>
          <i className="pi pi-times students-filters-menu-selected-divs-cancel-icon" />
          CANCEL SELECTION
        </div>
        <div className="students-filters-menu-selected-divs-csv">
          <i className="pi pi-upload students-filters-menu-selected-divs-csv-icon" />
          <CSVLink className="csv-link" {...csvReport}>
            EXPORT CSV
          </CSVLink>
        </div>
        <div className="students-filters-menu-selected-divs-archive">
          <i className="pi pi-book students-filters-menu-selected-divs-archive-icon" />
          ARCHIVE SELECTED
        </div>
      </div>
    </div>
  )
}

export default ExportStudentsCsv
