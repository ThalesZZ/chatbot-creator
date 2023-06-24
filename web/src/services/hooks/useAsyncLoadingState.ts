/* eslint-disable no-unused-vars */
import React from 'react'
import useToggle from './useToggle'

export enum AsyncState {
  PRISTINE = 'ASYNC_STATE_PRISTINE',
  LOADING = 'ASYNC_STATE_LOADING',
  SUCCESS = 'ASYNC_STATE_SUCCESS',
  ERROR = 'ASYNC_STATE_ERROR',
}

export type UseAsyncLoadingState = {
  state: AsyncState
  message: string
  isPristine: () => boolean
  isSuccessful: () => boolean
  isLoading: () => boolean
  isError: () => boolean
  start: (message?: string) => void
  successfulStop: (message?: string) => void
  errorStop: (message?: string) => void
  purgeStop: () => void
  stop: (
    newState: AsyncState.SUCCESS | AsyncState.ERROR,
    message?: string,
  ) => void
  purge: () => void
}

export default function useAsyncLoadingState(
  initialLoadingState?: boolean,
  initialMessage?: string,
): UseAsyncLoadingState {
  const loading = useToggle(initialLoadingState ?? false)
  const [asyncState, setAsyncState] = React.useState<AsyncState>(
    initialLoadingState ? AsyncState.LOADING : AsyncState.PRISTINE,
  )
  const [message, setMessage] = React.useState<string>(initialMessage)

  const start = React.useCallback(
    (message?: string) => {
      loading.enable()
      setAsyncState(() => AsyncState.LOADING)
      setMessage((curr) => message ?? curr)
    },
    [loading],
  )

  const stop = React.useCallback(
    (newState: AsyncState.SUCCESS | AsyncState.ERROR, message?: string) => {
      loading.disable()
      setAsyncState(() => newState)
      setMessage((curr) => message ?? curr)
    },
    [loading],
  )

  const successfulStop = React.useCallback(
    (message?: string) => {
      stop(AsyncState.SUCCESS)
      setMessage((curr) => message ?? curr)
    },
    [stop],
  )

  const errorStop = React.useCallback(
    (message?: string) => {
      stop(AsyncState.ERROR)
      setMessage((curr) => message ?? curr)
    },
    [stop],
  )

  const purge = React.useCallback(() => {
    loading.disable()
    setAsyncState(() => AsyncState.PRISTINE)
  }, [loading])

  const purgeStop = React.useCallback(() => {
    successfulStop()
    purge()
  }, [purge, successfulStop])

  const isPristine = React.useCallback(
    () => asyncState === AsyncState.PRISTINE,
    [asyncState],
  )
  const isSuccessful = React.useCallback(
    () => asyncState === AsyncState.SUCCESS,
    [asyncState],
  )
  const isLoading = React.useCallback(
    () => asyncState === AsyncState.LOADING,
    [asyncState],
  )
  const isError = React.useCallback(
    () => asyncState === AsyncState.ERROR,
    [asyncState],
  )

  return React.useMemo(
    () => ({
      state: asyncState,
      message,
      start,
      successfulStop,
      errorStop,
      purgeStop,
      stop,
      purge,
      isPristine,
      isSuccessful,
      isLoading,
      isError,
    }),
    [
      asyncState,
      message,
      start,
      successfulStop,
      errorStop,
      purgeStop,
      stop,
      purge,
      isPristine,
      isSuccessful,
      isLoading,
      isError,
    ],
  )
}
