import { useEffect, useState } from 'react'
import { Game } from './types.ts'
import { getGamesList, type ListQueryParams } from '../api/games.ts'

type LoadingState = 'pending' | 'resolved' | 'rejected'
export const useLoadingState = () => useState<LoadingState>('pending')

export const useFetchGamesList = (params: ListQueryParams) => {
    const [games, setGames] = useState<Game[]>([])
    const [gamesLoadingState, setGamesLoadingState] = useLoadingState()

    useEffect(() => {
        setGamesLoadingState('pending')
        getGamesList(params)
            .then(({ data }) => {
                setGames(data)
                setGamesLoadingState('resolved')
            })
            .catch(() => {
                setGamesLoadingState('rejected')
            })
    }, [params, setGamesLoadingState])

    return { games, gamesLoadingState }
}
