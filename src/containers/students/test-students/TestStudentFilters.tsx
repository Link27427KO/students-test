import { FC } from 'react'
import { PaginationIcon } from '../../../images/PaginationIcon'
import { Calendar } from 'primereact/calendar'

interface ITestStudentFiltersProps {
  period: any
  setPeriod: (e: any) => void
  refConcept: any
  refScore: any
  refSpeed: any
}

const TestStudentFilters: FC<ITestStudentFiltersProps> = (props: ITestStudentFiltersProps) => {
  const { refConcept, refScore, refSpeed, setPeriod, period } = props
  return (
    <>
      <div className="RowExpStudTemp-layout-data">
        <div
          className="RowExpStudTemp-layout-pagIcon1"
          onClick={(event) => {
            if (refConcept) {
              // @ts-ignore
              refConcept.current.toggle(event)
            }
          }}
        >
          <span className="RowExpStudTemp-layout-pagIcon-concepts">ALL CONCEPTS</span>
          <PaginationIcon height={4} width={8} />
        </div>
        <div
          className="RowExpStudTemp-layout-pagIcon2"
          onClick={(event) => {
            if (refScore) {
              // @ts-ignore
              refScore.current.toggle(event)
            }
          }}
        >
          <span className="RowExpStudTemp-layout-pagIcon-score">ALL SCORE</span>
          <PaginationIcon height={4} width={8} />
        </div>
        <div
          className="RowExpStudTemp-layout-pagIcon3"
          onClick={(event) => {
            if (refSpeed) {
              // @ts-ignore
              refSpeed.current.toggle(event)
            }
          }}
        >
          <span className="RowExpStudTemp-layout-pagIcon-speed">ALL SPEED</span>
          <PaginationIcon height={4} width={8} />
        </div>
        <div className="field col-12 md:col-4 div-calendar">
          <Calendar
            className="period-test-calendar"
            placeholder={'SELECT PERIOD'}
            id="icon"
            value={period}
            onChange={(e) => setPeriod(e.value)}
            showIcon
          />
        </div>
        <div>
          <i className="pi pi-sync sync-icon" />
        </div>
      </div>
    </>
  )
}

export default TestStudentFilters
