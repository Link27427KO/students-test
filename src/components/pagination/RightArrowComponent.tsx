import { FC } from 'react'
import { ChangePaginationSideEnum } from './Pagination'
interface IRightArrowComponentProps {
  page: number
  size: number
  totalCount: number
  changePage: (e: ChangePaginationSideEnum) => void
}

const RightArrowComponent: FC<IRightArrowComponentProps> = (props: IRightArrowComponentProps) => {
  const { page, size, totalCount, changePage } = props
  const onClick = () => {
    const lastElementNumber = page * size >= totalCount ? totalCount : page * size
    if (lastElementNumber < totalCount) {
      changePage(ChangePaginationSideEnum.right)
    }
  }
  return (
    <div className="pagination-menu-rightItem" onClick={onClick}>
      <i className="pi pi-chevron-right pagination-menu-rightItem-icon" />
    </div>
  )
}
export default RightArrowComponent
