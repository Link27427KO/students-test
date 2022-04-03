import { FC } from 'react'
import { PaginationIcon } from '../../images/PaginationIcon'

interface IChangePaginationComponentProps {
  refMenu: any
  perPage: number | string
}

const ChangePaginationComponent: FC<IChangePaginationComponentProps> = (props: IChangePaginationComponentProps) => {
  const { perPage, refMenu } = props
  return (
    <div
      className="pagination-menu-perPage"
      onClick={(event) => {
        if (refMenu) {
          // @ts-ignore
          refMenu.current.toggle(event)
        }
      }}
    >
      <span className="pagination-menu-perPage-perPage">{perPage}</span>
      <PaginationIcon />
    </div>
  )
}

export default ChangePaginationComponent
