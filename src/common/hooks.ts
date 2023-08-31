import { useEffect, useState } from 'react'
import { notification } from 'antd'

export type LoadingState = 'pending' | 'resolved' | 'rejected'
export const useLoadingState = () => useState<LoadingState>('pending')

export const useShowErrorNotification = ({
    loadingState,
    message = 'Something went wrong',
    description = 'Failed to get data from server',
}: {
    loadingState: LoadingState
    message?: string
    description?: string
}) => {
    const [notify, contextHolder] = notification.useNotification()

    useEffect(() => {
        if (loadingState === 'rejected') {
            notify.error({
                message,
                description,
            })
        }
    }, [description, loadingState, message, notify])

    return contextHolder
}
