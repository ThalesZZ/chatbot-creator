import React from 'react'
import useAsyncLoadingState, {
  UseAsyncLoadingState,
} from './useAsyncLoadingState'
import useToggle from './useToggle'
import { useDispatch } from 'react-redux'
import type { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit'

export type ForceReloadFn = () => void
export type LastUpdate = Date
export type UseFetch<T = any> = [
  T,
  UseAsyncLoadingState,
  ForceReloadFn,
  LastUpdate,
]

export default function useFetch<T>(
  initialValue: T,
  fetchFn: () => Promise<T>,
  reduxAction?: ActionCreatorWithOptionalPayload<T>,
): UseFetch<T> {
  const dispatch = useDispatch()
  const [entity, setEntity] = React.useState<T>(initialValue)
  const [lastUpdate, setLastUpdate] = React.useState<Date>(null)
  const loading = useAsyncLoadingState()
  const forceReloadFlag = useToggle()

  React.useEffect(() => {
    loading.start()
    fetchFn()
      .then((response) => {
        if (reduxAction) dispatch(reduxAction(response))
        setEntity(response)
        setLastUpdate(new Date())
        loading.successfulStop()
      })
      .catch((err) => {
        // TODO log error
        console.error(err)
        loading.errorStop()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceReloadFlag.active])

  return React.useMemo(
    () => [entity, loading, forceReloadFlag.toggle, lastUpdate],
    [entity, forceReloadFlag.toggle, lastUpdate, loading],
  )
}
