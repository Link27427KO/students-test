import { FC } from 'react'
import { Table } from '../../../components/Table'
import { normalizeTests } from '../../../helpers/functions'
import { ITest } from '../../../modules/students/types'

interface ITestStudentTableProps {
  tests: ITest[]
  headerAliasesAndNames: any
  columns: any
  selectedColumn: any
  setSelectedColumn: (value: any) => void
}

const TestStudentTable: FC<ITestStudentTableProps> = (props: ITestStudentTableProps) => {
  const { selectedColumn, setSelectedColumn, tests, columns, headerAliasesAndNames } = props
  return (
    <div className="students-table-card">
      <Table
        tableClassName="student-test-table"
        headerStyles={{ background: '#F2F2F2', zIndex: '2!important' }}
        isSelected={false}
        data={normalizeTests(tests)}
        headerNames={headerAliasesAndNames}
        columns={columns}
        sortFieldAlias={'date'}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
      />
    </div>
  )
}
export default TestStudentTable
