import { FC } from 'react'

interface ITestStudentHeaderProps {
  name: string
  id: string
}

const TestStudentHeader: FC<ITestStudentHeaderProps> = (props: ITestStudentHeaderProps) => {
  const { id, name } = props
  return (
    <div className="RowExpStudTemp-layout">
      <span>
        STUDENT: <span className="RowExpStudTemp-student">{name.toUpperCase()}</span>{' '}
      </span>
      <span className="RowExpStudTemp-id">
        ID: <span className="RowExpStudTemp-id-data">{id.toString().substring(0, id.toString().length - 1)}</span>
      </span>
    </div>
  )
}
export default TestStudentHeader
