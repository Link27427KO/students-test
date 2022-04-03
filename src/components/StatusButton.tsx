import { FC, useEffect, useState } from 'react'

export enum StatusButtonEnum {
  'blue' = 'blue',
  'green' = 'green',
  'yellow' = 'yellow',
  'red' = 'red',
}

export interface IStatusButtonProps {
  status: StatusButtonEnum
}

export const StatusButton: FC<IStatusButtonProps> = (props: IStatusButtonProps) => {
  const { status } = props
  const [statusButtonClassName, setStatusButtonClassName] = useState('')

  useEffect(() => {
    switch (status) {
      case StatusButtonEnum.blue:
        setStatusButtonClassName('status-button__blue')
        break
      case StatusButtonEnum.green:
        setStatusButtonClassName('status-button__green')
        break
      case StatusButtonEnum.yellow:
        setStatusButtonClassName('status-button__yellow')
        break
      case StatusButtonEnum.red:
        setStatusButtonClassName('status-button__red')
        break
      default:
        break
    }
  }, [])
  return <span className={`status-button ${statusButtonClassName}`} />
}
export default StatusButton
