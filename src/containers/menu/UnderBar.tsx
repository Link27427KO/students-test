import { FC } from 'react'
import { Menubar } from 'primereact/menubar'

const UnderBar: FC = () => {
  const objShowAll = {
    label: 'Show all',
    items: [
      {
        label: 'Show all',
      },
      {
        label: 'Active',
      },
      {
        label: 'Archived',
      },
    ],
  }

  const objAllGrades = {
    label: 'All grades',
    items: [
      {
        label: 'All grades',
      },
      {
        label: '1 grade',
      },
      {
        label: '2 grade',
      },
      {
        label: '3 grade',
      },
      {
        label: '4 grade',
      },
      {
        label: '5 grade',
      },
      {
        label: '6 grade',
      },
      {
        label: '7 grade',
      },
      {
        label: '8 grade',
      },
      {
        label: '9 grade',
      },
      {
        label: '10 grade',
      },
      {
        label: '11 grade',
      },
    ],
  }

  const arrayClasses = [
    {
      label: '1a',
    },
    {
      label: '1b',
    },
    {
      label: '1c',
    },
    {
      label: '1d',
    },
    {
      label: '1e',
    },
  ]

  const objAllClasses = {
    label: 'All classes',
    items: [
      {
        label: 'All classes',
      },
      {
        label: '1 grade',
        items: arrayClasses,
      },
      {
        label: '2 grade',
        items: arrayClasses,
      },
      {
        label: '3 grade',
        items: arrayClasses,
      },
      {
        label: '4 grade',
        items: arrayClasses,
      },
      {
        label: '5 grade',
        items: arrayClasses,
      },
      {
        label: '6 grade',
        items: arrayClasses,
      },
      {
        label: '7 grade',
        items: arrayClasses,
      },
      {
        label: '8 grade',
        items: arrayClasses,
      },
      {
        label: '9 grade',
        items: arrayClasses,
      },
      {
        label: '10 grade',
        items: arrayClasses,
      },
      {
        label: '11 grade',
        items: arrayClasses,
      },
    ],
  }

  const objAvScore = {
    label: 'Av.score',
    items: [
      {
        label: 'All',
      },
      {
        label: '90%+',
      },
      {
        label: '80-89%',
      },
      {
        label: '50-79%',
      },
      {
        label: 'Below 50%',
      },
    ],
  }

  const objAvSpeed = {
    label: 'Av.speed',
    items: [
      {
        label: 'All',
      },
      {
        label: 'Above exp.',
      },
      {
        label: 'As exp.',
      },
      {
        label: 'Below exp.',
      },
    ],
  }

  const cloneObjAllClasses = {}
  Object.assign(cloneObjAllClasses, objAllClasses)

  const objClearAll = {
    label: 'Clear all',
    icon: 'pi pi-fw pi-times',
  }

  const items = [objShowAll, objAllGrades, objAllClasses, objAvScore, objAvSpeed, cloneObjAllClasses, objClearAll]

  return (
    <div>
      <Menubar model={items} className="under-bar" />
    </div>
  )
}
export default UnderBar
