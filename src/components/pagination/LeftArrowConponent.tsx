import { FC } from 'react'
import { ChangePaginationSideEnum } from './Pagination'
interface ILeftArrowComponentProps {
  page: number
  changePage: (e: ChangePaginationSideEnum) => void
}

const LeftArrowComponent: FC<ILeftArrowComponentProps> = (props: ILeftArrowComponentProps) => {
  const { page, changePage } = props
  const onClick = () => {
    if (page > 1) {
      changePage(ChangePaginationSideEnum.left)
    }
  }
  return (
    <div className="pagination-menu-leftItem" onClick={onClick}>
      <i className="pi pi-chevron-left pagination-menu-leftItem-icon" />
    </div>
  )
}
export default LeftArrowComponent
