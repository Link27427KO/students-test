import { FC, useRef } from 'react'
import { Menubar } from 'primereact/menubar'
import UnderBar from './UnderBar'
import HardcodeAvatar from '../../images/HardcodeAvatar'
import { Menu } from 'primereact/menu'
import { PaginationIcon } from '../../images/PaginationIcon'

const MenuBar: FC = () => {
  const refAvatar = useRef(null)
  const items = [
    {
      label: 'School 1',
      items: [
        {
          label: 'School 1',
        },
        {
          label: 'School 2',
        },
        {
          label: 'School 3',
        },
        {
          label: 'School 4',
        },
        {
          label: 'School 5',
        },
      ],
    },
    {
      label: 'Analytics',
    },
    {
      label: 'Gradebooks',
    },
    {
      label: 'Tests',
    },
    {
      label: 'Students',
    },
    {
      label: 'Teachers',
    },
    {
      label: 'Archive',
    },
  ]
  const refAvatarItems = [{ label: 'Students' }, { label: 'Profile' }, { label: 'Logout' }]
  return (
    <div className="content card">
      <div className="menu-card">
        <Menubar model={items} className="menu-bar" />
        <div
          className="menu-avatar"
          onClick={(event) => {
            if (refAvatar) {
              // @ts-ignore
              refAvatar.current.toggle(event)
            }
          }}
        >
          <div className="hc-avatar">
            <HardcodeAvatar />
          </div>
          <PaginationIcon />
        </div>
        <Menu ref={refAvatar} model={refAvatarItems} popup />
      </div>
      <div>
        <UnderBar />
      </div>
    </div>
  )
}
export default MenuBar
