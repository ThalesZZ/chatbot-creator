import React from 'react'

export interface UseToggle {
  active: boolean
  enable: () => void
  disable: () => void
  toggle: () => void
  set: React.Dispatch<React.SetStateAction<boolean>>
}

export default function useToggle(initialState = false): UseToggle {
  const [active, set] = React.useState(initialState)
  const enable = React.useCallback((): void => set(() => true), [])
  const disable = React.useCallback((): void => set(() => false), [])
  const toggle = React.useCallback((): void => set((a) => !a), [])

  return React.useMemo(
    () => ({ active, enable, disable, toggle, set }),
    [active, disable, enable, toggle],
  )
}
