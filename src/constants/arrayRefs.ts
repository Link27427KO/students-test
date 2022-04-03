interface IRowExpandDropdownItemsProps {
  showToast?: (p: { severity?: string; summary?: string; detail?: string }) => void
}

export const conceptItems = (props: IRowExpandDropdownItemsProps) => {
  const { showToast } = props
  return [
    {
      label: 'Concept 1',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'success',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
    {
      label: 'Concept 2',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'warn',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
    {
      label: 'Concept 3',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'error',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
  ]
}

export const scoreItems = (props: IRowExpandDropdownItemsProps) => {
  const { showToast } = props
  return [
    {
      label: 'Score 1',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'success',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
    {
      label: 'Score 2',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'warn',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
    {
      label: 'Score 3',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'error',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
  ]
}

export const speedItems = (props: IRowExpandDropdownItemsProps) => {
  const { showToast } = props
  return [
    {
      label: 'Speed 1',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'success',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
    {
      label: 'Speed 2',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'warn',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
    {
      label: 'Speed 3',
      command: (e: any) => {
        if (showToast) {
          showToast({
            severity: 'error',
            summary: '',
            detail: `${e.item.label} selected`,
          })
        }
      },
    },
  ]
}
