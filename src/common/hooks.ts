import { useEffect, useState } from 'react'
import { Game } from './types.ts'
import { getGamesList } from '../api/games.ts'

type LoadingState = 'pending' | 'resolved' | 'rejected'
export const useLoadingState = () => useState<LoadingState>('pending')

export const useFetchGamesList = () => {
    const [games, setGames] = useState<Game[]>([])
    const [gamesLoadingState, setGamesLoadingState] = useLoadingState()

    useEffect(() => {
        setGamesLoadingState('pending')
        getGamesList()
            .then(({ data }) => {
                setGames(data)
                setGamesLoadingState('resolved')
            })
            .catch(() => {
                setGamesLoadingState('rejected')
            })
    }, [setGamesLoadingState])

    return { games, gamesLoadingState }
}
