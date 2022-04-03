import { FC } from 'react'
import { convertTablePages } from '../../helpers/functions'

interface ITablePagesComponentProps {
  page: number
  size: number
  totalCount: number
}

const TablePagesComponent: FC<ITablePagesComponentProps> = (props: ITablePagesComponentProps) => {
  const { page, size, totalCount } = props
  return (
    <div>
      <span>{convertTablePages({ page, size, totalCount })}</span>
    </div>
  )
}

export default TablePagesComponent
