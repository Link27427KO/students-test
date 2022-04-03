import { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPaginationInput } from '../../modules/types'
import { PaginationIcon } from '../../images/PaginationIcon'
import { Menu } from 'primereact/menu'
import { convertTablePages, getQuery } from '../../helpers/functions'
import ChangePaginationComponent from './ChangePaginationComponent'
import TablePagesComponent from './TablePagesComponent'
import LeftArrowComponent from './LeftArrowConponent'
import RightArrowComponent from './RightArrowComponent'

export enum ChangePaginationSideEnum {
  'left' = 'left',
  'right' = 'right',
}

export interface IPaginationProps {
  paginationSelector: any
  filtersSelector: any
  requestAction: any
}

const Pagination: FC<IPaginationProps> = (props: IPaginationProps) => {
  let { paginationSelector, filtersSelector, requestAction } = props
  const dispatch = useDispatch()
  const { query } = getQuery()

  const pagination = useSelector(paginationSelector) as IPaginationInput
  let { page, size, totalCount } = pagination
  // @ts-ignore
  const { sortBy, sortDir } = useSelector(filtersSelector)

  const refMenu = useRef(null)
  const [perPage, setPerPage] = useState(10)

  const items = Array.from([5, 10, 15, 20, 25, 30]).map((item) => {
    return {
      label: item.toString(),
      command: (e: any) => {
        changeSize(e.item.label)
      },
    }
  })

  const changeSize = (value: string) => {
    setPerPage(Number(value))
    const payload = {
      page: String(1),
      size: String(value),
      sortBy: query.sortBy ?? sortBy,
      sortDir: query.sortDir ?? sortDir,
      search: query.search ?? undefined,
    }
    // @ts-ignore
    dispatch(requestAction(payload))
  }

  const changePage = (side: ChangePaginationSideEnum) => {
    const payload = {
      page: String(side === ChangePaginationSideEnum.right ? ++page : ChangePaginationSideEnum.left ? --page : page),
      size: String(perPage),
      sortBy: query.sortBy ?? sortBy,
      sortDir: query.sortDir ?? sortDir,
      search: query.search ?? undefined,
    }
    // @ts-ignore
    dispatch(requestAction(payload))
  }

  useEffect(() => {
    if (query.size) {
      setPerPage(Number(query.size))
    }
  }, [query.size])

  return (
    <div className="pagination-menu">
      <span>Rows per page:</span>
      <Menu ref={refMenu} model={items} popup id="pagination" />
      <ChangePaginationComponent perPage={perPage} refMenu={refMenu} />
      <TablePagesComponent page={page} size={size} totalCount={totalCount} />
      <LeftArrowComponent page={page} changePage={changePage} />
      <RightArrowComponent page={page} changePage={changePage} totalCount={totalCount} size={size} />
    </div>
  )
}

export default Pagination
