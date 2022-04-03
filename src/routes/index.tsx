import { Redirect, Route, Switch } from 'react-router'
import StudentsPage from '../pages/StudentsPage'
import { IToastProps } from '../types'
import { useRef } from 'react'
import { Toast } from 'primereact/toast'

export const useRoutes = () => {
  const toast = useRef(null)

  const showToast = (props: IToastProps) => {
    const { severity, summary, life, detail } = props
    // @ts-ignore
    toast.current.show({ severity: severity, summary: summary, life: life || 3000, detail: detail || '' })
  }
  return (
    <>
      <Switch>
        <Route path="/students" exact>
          <StudentsPage showToast={showToast} />
        </Route>
        <Redirect to={'/students'} />
      </Switch>
      <Toast ref={toast} />
    </>
  )
}
