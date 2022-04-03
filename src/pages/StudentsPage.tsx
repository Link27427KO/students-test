import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentsRequest, setStudentsFiltersResponse } from '../modules/students/actions'
import {
  studentsFiltersSelector,
  studentsLoadingSelector,
  studentsPaginationSelector,
  studentsSelector,
} from '../modules/students/selectors'
import { Table } from '../components/Table'
import { getQuery, normalizeStudents } from '../helpers/functions'
import Pagination from '../components/pagination/Pagination'
import StudentsFilters from '../containers/students/StudentsFilters'
import { SortDirStudentsEnum, StudentsSortFieldsEnum } from '../modules/students/types'
import { DataTableSortParams } from 'primereact/datatable'
import RowExpandStudentsTemplate, { IRowExpandTemplateProps } from '../containers/students/RowExpandStudentsTemplate'

const rowExpansionTemplate: FC<IRowExpandTemplateProps> = (props: IRowExpandTemplateProps) => {
  const { data, showToast } = props
  if (showToast) {
    return <RowExpandStudentsTemplate data={data} showToast={showToast} />
  }
  return <RowExpandStudentsTemplate data={data} />
}

interface IStudentsPageProps {
  showToast?: (p: { severity?: string; summary?: string; detail?: string }) => void
}

const StudentsPage: FC<IStudentsPageProps> = (props: IStudentsPageProps) => {
  const { showToast } = props
  const dispatch = useDispatch()
  const students = useSelector(studentsSelector)
  const loading = useSelector(studentsLoadingSelector)
  const pagination = useSelector(studentsPaginationSelector)
  const { size } = pagination
  const filters = useSelector(studentsFiltersSelector)
  const { sortBy, search, sortDir } = filters
  const [selectedColumn, setSelectedColumn] = useState<any>(null)
  const { query } = getQuery()
  const [searchInput, setSearchInput] = useState(query.search ?? undefined)

  const searchRequest = (props: { search: string | undefined }) => {
    const { search } = props
    const payload = {
      page: 1,
      size: query.size ?? size,
      search,
      sortDir: query.sortDir ?? sortDir,
      sortBy: query.sortBy ?? sortBy,
    }
    // @ts-ignore
    dispatch(getStudentsRequest(payload))
  }

  useEffect(() => {
    searchRequest({ search: query.search ?? search })
  }, [])

  const changeSort = (event: DataTableSortParams) => {
    let tempOrder: string | undefined
    if ((query.sortDir && query.sortDir === SortDirStudentsEnum.ASC) || sortDir === SortDirStudentsEnum.ASC) {
      tempOrder = SortDirStudentsEnum.DESC
    }
    if ((query.sortDir && query.sortDir === SortDirStudentsEnum.DESC) || sortDir === SortDirStudentsEnum.DESC) {
      tempOrder = SortDirStudentsEnum.ASC
    }

    const filtersPayload = {
      // @ts-ignore
      sortBy: StudentsSortFieldsEnum[event.sortField],
      // @ts-ignore
      sortDir: SortDirStudentsEnum[tempOrder],
      search: query.search ?? undefined,
    }
    const paginationPayload = {
      page: 1,
      size: Number(query.size) ?? size,
    }
    dispatch(setStudentsFiltersResponse(filtersPayload))
    dispatch(
      getStudentsRequest({
        ...paginationPayload,
        ...filtersPayload,
      }),
    )
  }

  const headerAliasesAndNames = {
    name: { name: 'Name', sort: true, template: 'DefaultColor' },
    id: { name: 'ID', template: 'StudentId' },
    class: { name: 'Class', sort: true, template: 'DefaultColor' },
    score: { name: 'Av.Score, %', sort: true, template: 'AvScore' },
    speed: { name: 'Av.Speed', sort: true, template: 'AvSpeed' },
    parents: { name: 'Parents', template: 'Parents' },
    actions: { name: 'Actions', template: 'ActionsStudentsTable' },
  }

  const columns = Object.keys(headerAliasesAndNames)
  return (
    <>
      <Table
        showToast={showToast}
        tableClassName="student-table"
        isSelected={true}
        onSort={changeSort}
        data={normalizeStudents(students)}
        headerNames={headerAliasesAndNames}
        columns={columns}
        sortFieldAlias={'name'}
        renderHeader={() =>
          StudentsFilters({
            selectedColumn,
            setSelectedColumn,
            searchRequest,
            setSearchInput,
            searchInput,
          })
        }
        scrollHeight={'550px'}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
        loading={loading}
        rowExpansionTemplate={rowExpansionTemplate}
        isExpanded={true}
      />
      <Pagination
        requestAction={getStudentsRequest}
        filtersSelector={studentsFiltersSelector}
        paginationSelector={studentsPaginationSelector}
      />
    </>
  )
}
export default StudentsPage
