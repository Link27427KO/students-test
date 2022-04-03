import { FC, useRef, useState } from 'react'
import StatusButton, { StatusButtonEnum } from '../../components/StatusButton'
import { ITest } from '../../modules/students/types'
import { Table } from '../../components/Table'
import { countAvgScore, normalizeTests, setAvScoreClassName } from '../../helpers/functions'
import { PaginationIcon } from '../../images/PaginationIcon'
import { Calendar } from 'primereact/calendar'
import { Menu } from 'primereact/menu'
import { conceptItems, scoreItems, speedItems } from '../../constants/arrayRefs'
import TestStudentHeader from './test-students/TestStudentHeader'
import TestStudentFilters from './test-students/TestStudentFilters'
import TestStudentDescription from './test-students/TestStudentDescription'
import TestStudentTable from './test-students/TestStudentTable'
import TestStudentFooter from './test-students/TestStudentFooter'

export interface IRowExpandTemplateProps {
  data: any
  showToast?: (p: { severity?: string; summary?: string; detail?: string }) => void
}

const RowExpandStudentsTemplate: FC<IRowExpandTemplateProps> = (props: IRowExpandTemplateProps) => {
  const { data, showToast } = props
  const tests = data.tests as ITest[]
  const [selectedColumn, setSelectedColumn] = useState<any>(null)
  const [period, setPeriod] = useState<any>(null)

  // dropdown refs
  const refConcept = useRef(null)
  const refScore = useRef(null)
  const refSpeed = useRef(null)

  const avgScore = countAvgScore(tests.map((item) => item.score))
  const headerAliasesAndNames = {
    id: { name: '#', template: 'DefaultColor' },
    label: { name: 'Test Label', template: 'TestDefault' },
    score: { name: 'Score', template: 'TestValue' },
    speed: { name: 'Speed', template: 'TestValue' },
    total: { name: 'Total Q-ns', template: 'TestDefault' },
    expSpeed: { name: 'Exp.Speed', template: 'TestDefault' },
    concept: { name: 'Concept', template: 'TestDefault' },
    date: { name: 'Date', sort: true, template: 'TestDefault' },
    abcent: { name: 'Absent', template: 'AbsentTest' },
  }
  const columns = Object.keys(headerAliasesAndNames)
  const refConceptItems = conceptItems({ showToast })
  const refScoreItems = scoreItems({ showToast })
  const refSpeedItems = speedItems({ showToast })
  return (
    <div className="RowExpStudTemp">
      <Menu ref={refConcept} model={refConceptItems} popup id="popup_menu" />
      <Menu ref={refScore} model={refScoreItems} popup id="popup_menu" />
      <Menu ref={refSpeed} model={refSpeedItems} popup id="popup_menu" />

      <TestStudentHeader id={data.id} name={data.name} />
      <TestStudentFilters
        period={period}
        setPeriod={setPeriod}
        refConcept={refConcept}
        refScore={refScore}
        refSpeed={refSpeed}
      />
      <div className="helper-div" />
      <TestStudentDescription />
      <TestStudentTable
        setSelectedColumn={setSelectedColumn}
        selectedColumn={selectedColumn}
        columns={columns}
        headerAliasesAndNames={headerAliasesAndNames}
        tests={tests}
      />
      <div className="students-table-card-after" />
      <TestStudentFooter avgScore={avgScore} />
    </div>
  )
}
export default RowExpandStudentsTemplate
