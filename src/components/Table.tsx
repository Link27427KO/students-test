import { FC, useState } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTableSortParams } from 'primereact/datatable'
import { ColumnGroup } from 'primereact/columngroup'
import { Row } from 'primereact/row'
import { normalizeParents, setAvScoreClassName, setAvSpeed, substringStudentId } from '../helpers/functions'
import ParentTemplateIcon from '../images/ParentTemplateIcon'
import DropdownIconTable from '../images/DropdownIconTable'
import { Checkbox } from 'primereact/checkbox'
import { classNames } from 'primereact/utils'
import ExpandedDropdownIconTable from '../images/ExpandedDropdownIconTable'

export interface IColumnValues {
  header?: string
  expandedRows?: any
  headerStyles?: object
  selectedColumn?: object
  field: string
  index: number | string
  sort?: boolean | undefined
  sortFieldAlias: string
  template?: string
  data?: any
  dependencyFields?: string[] | []
  showToast?: (p: { severity?: string; summary?: string; detail?: string }) => void
}

const templateFormatter = (columnInfo: IColumnValues) => {
  const { index, field, header, template, sort, sortFieldAlias, headerStyles, expandedRows } = columnInfo
  switch (template) {
    case 'StudentId':
      const StudentIdTemplate = (rowData: any) => {
        return <div className="default-color">{substringStudentId(rowData.id)}</div>
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={StudentIdTemplate}
          />
        )
      }
      return <Column field={field} key={index} header={header} style={headerStyles} body={StudentIdTemplate} />
    case 'AvScore':
      const AvScoreTemplate = (rowData: any) => {
        return <div className={setAvScoreClassName(rowData.score)}>{rowData.score}</div>
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={AvScoreTemplate}
          />
        )
      }
      return <Column field={field} key={index} style={headerStyles} header={header} body={AvScoreTemplate} />
    case 'AvSpeed':
      const AvSpeedTemplate = (rowData: any) => {
        return <div className={setAvSpeed(rowData.speed)}>{rowData.speed}</div>
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={AvSpeedTemplate}
          />
        )
      }
      return <Column field={field} key={index} style={headerStyles} header={header} body={AvSpeedTemplate} />
    case 'Parents':
      const ParentsTemplate = (rowData: any) => {
        if (rowData.parents.length > 0) {
          return (
            <div className="parents">
              <ParentTemplateIcon />
              <span className="parents__added">{normalizeParents(rowData.parents)}</span>
            </div>
          )
        }
        return <div className="parents__no">No Parents Added</div>
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={ParentsTemplate}
          />
        )
      }
      return <Column field={field} key={index} style={headerStyles} header={header} body={ParentsTemplate} />
    case 'DefaultColor':
      const DefaultColorTemplate = (rowData: any) => {
        return <div className="default-color">{rowData[field]}</div>
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={DefaultColorTemplate}
          />
        )
      }
      return <Column field={field} key={index} style={headerStyles} header={header} body={DefaultColorTemplate} />
    case 'AbsentTest':
      const AbsentTestTemplate = (rowData: any) => {
        return <Checkbox checked={rowData.abcent} />
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={AbsentTestTemplate}
          />
        )
      }
      return <Column field={field} key={index} style={headerStyles} header={header} body={AbsentTestTemplate} />
    case 'TestValue':
      const TestValueTemplate = (rowData: any) => {
        let result = rowData[field]
        if (!rowData[field]) {
          result = 'NIL'
        }
        return (
          <div
            style={{
              opacity: `${!rowData['score'] || !rowData['speed'] ? 0.5 : 1}`,
            }}
            className="default-color"
          >
            {result}
          </div>
        )
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={TestValueTemplate}
          />
        )
      }
      return <Column field={field} key={index} style={headerStyles} header={header} body={TestValueTemplate} />
    case 'TestDefault':
      const TestDefaultTemplate = (rowData: any) => {
        return (
          <div
            style={{
              opacity: `${!rowData['score'] || !rowData['speed'] ? 0.5 : 1}`,
            }}
            className="default-color"
          >
            {rowData[field]}
          </div>
        )
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={TestDefaultTemplate}
          />
        )
      }
      return <Column field={field} key={index} style={headerStyles} header={header} body={TestDefaultTemplate} />
    case 'ActionsStudentsTable':
      const ActionsStudentsTableTemplate = (rowData: any) => {
        const elements = document.getElementsByClassName('p-row-toggler p-link')
        let currentElement: any = elements[rowData.index]
        if (currentElement) {
          currentElement.style.display = 'none'
          return (
            <div
              style={{ position: 'absolute', right: 10, padding: 20 }}
              onClick={() => {
                currentElement.click()
              }}
            >
              {expandedRows[`${rowData.id}`] ? <ExpandedDropdownIconTable /> : <DropdownIconTable />}
            </div>
          )
        }
        return <div>Error</div>
      }

      if (sort) {
        return (
          <Column
            field={field}
            sortable
            key={index}
            header={header}
            sortField={sortFieldAlias}
            body={ActionsStudentsTableTemplate}
          />
        )
      }
      return (
        <Column field={field} key={index} style={headerStyles} header={header} body={ActionsStudentsTableTemplate} />
      )
  }
}

const renderColumns = (columnInfo: IColumnValues) => {
  const { sort, index, field, header, headerStyles, sortFieldAlias, template } = columnInfo

  if (template) {
    return templateFormatter(columnInfo)
  }

  if (sort) {
    return (
      <Column
        field={field}
        sortable
        showAddButton={false}
        showApplyButton={false}
        showClearButton={false}
        showFilterMatchModes={false}
        showFilterMenu={false}
        showFilterMenuOptions={false}
        showFilterOperator={false}
        key={index}
        header={header}
        sortField={sortFieldAlias}
        style={{
          paddingRight: '25px',
          maxWidth: '350px',
          overflow: 'auto',
          ...headerStyles,
        }}
      />
    )
  }
  return (
    <Column
      field={field}
      key={index}
      header={header}
      style={{
        paddingRight: '25px',
        maxWidth: '350px',
        overflow: 'auto',
        ...headerStyles,
      }}
    />
  )
}
const formHeaderGroup = (props: { headersInfo: any; isSelected?: boolean; headerStyles?: any }) => {
  const { isSelected, headersInfo, headerStyles } = props
  const fields = Object.keys(headersInfo)

  return (
    <ColumnGroup>
      <Row>
        {isSelected && <Column selectionMode="multiple" headerStyle={{ width: '3em' }} />}

        {fields.map((field, index) => {
          const sortFieldAlias = headersInfo[field].sortFieldAlias || field
          const dependencyFields = headersInfo[field].dependencyFields || []

          return renderColumns({
            field,
            header: headersInfo[field].name,
            sort: headersInfo[field].sort,
            index,
            sortFieldAlias,
            dependencyFields,
            headerStyles: {
              overflowWrap: 'anywhere',
              overflow: 'none',
              ...headerStyles,
            },
          })
        })}
      </Row>
    </ColumnGroup>
  )
}

export interface ITableProps {
  data: any
  headerNames: any
  columns: string[]
  sortFieldAlias: string
  showToast?: any
  selectedColumn: any
  setSelectedColumn: any
  renderHeader?: any
  onSort?: (event: DataTableSortParams) => void
  loading?: boolean
  rowExpansionTemplate?: any
  scrollHeight?: string
  isExpanded?: boolean
  isSelected?: boolean
  style?: any
  headerStyles?: any
  tableClassName?: string
}

export const Table: FC<ITableProps> = (props: ITableProps) => {
  const {
    data,
    headerNames,
    columns,
    sortFieldAlias,
    showToast,
    renderHeader,
    setSelectedColumn,
    selectedColumn,
    onSort,
    loading,
    rowExpansionTemplate,
    scrollHeight,
    isExpanded,
    isSelected,
    style,
    headerStyles,
    tableClassName,
  } = props
  const headerGroup = formHeaderGroup({
    headersInfo: headerNames,
    isSelected,
    headerStyles,
  })
  const [expandedRows, setExpandedRows] = useState<any>({})
  return (
    <div className="content-section implementation datatable-doc-demo">
      <div className="card">
        <DataTable
          loading={loading ?? false}
          style={{ ...style }}
          onSort={onSort}
          headerColumnGroup={headerGroup}
          value={data}
          className={classNames('p-datatable-customers', tableClassName ?? '') ?? ''}
          header={renderHeader}
          rows={15}
          rowHover
          scrollable
          scrollHeight={scrollHeight ?? '650px'}
          scrollDirection={'vertical'}
          resizableColumns
          columnResizeMode="expand"
          responsiveLayout="scroll"
          selection={selectedColumn}
          onSelectionChange={(e) => {
            setSelectedColumn(e.value)
          }}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={(data) => {
            if (rowExpansionTemplate) {
              return rowExpansionTemplate({ data, showToast })
            }
          }}
          dataKey="id"
        >
          {isSelected && <Column selectionMode="multiple" headerStyle={{ width: '3em' }} />}
          {columns.map((field, index) => {
            return renderColumns({
              data,
              expandedRows,
              sortFieldAlias,
              field,
              index,
              // @ts-ignore
              template: headerNames[field].template,
              // @ts-ignore
              dependencyFields: headerNames[field].dependencyFields || [],
              selectedColumn,
              headerStyles,
              // @ts-ignore
              showToast,
            })
          })}
          {isExpanded && <Column expander style={{ width: '3em' }} />}
        </DataTable>
      </div>
    </div>
  )
}
