import { FC } from 'react'
import { setAvScoreClassName } from '../../../helpers/functions'

interface ITestStudentFooterProps {
  avgScore: string
}
const TestStudentFooter: FC<ITestStudentFooterProps> = (props: ITestStudentFooterProps) => {
  const { avgScore } = props
  return (
    <div className="students-table-card-after-avg">
      <span className="students-table-card-after-avg-average">AVERAGE</span>
      <span
        className={`${setAvScoreClassName(avgScore)} 
          students-table-card-after-avg-score
          `}
      >
        {avgScore}
      </span>
      <span
        className={`${setAvScoreClassName(avgScore)}
          students-table-card-after-avg-expected
          `}
      >
        ABOVE EXPECTED
      </span>
    </div>
  )
}

export default TestStudentFooter
