import { useEffect, useState } from 'react'
import { Game, GameShort } from './types.ts'
import {
    getGameById,
    getGamesList,
    type ListQueryParams,
} from '../api/games.ts'

type LoadingState = 'pending' | 'resolved' | 'rejected'
export const useLoadingState = () => useState<LoadingState>('pending')

export const useFetchGamesList = (params: ListQueryParams) => {
    const [games, setGames] = useState<GameShort[]>([])
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

export const useFetchGameById = (id: string | undefined) => {
    const [game, setGame] = useState<Game | undefined>(undefined)
    const [gameLoadingState, setGameLoadingState] = useLoadingState()

    useEffect(() => {
        setGameLoadingState('pending')

        getGameById(id)
            .then(({ data }) => {
                setGameLoadingState('resolved')
                setGame(data)
            })
            .catch(() => {
                setGameLoadingState('rejected')
            })
    }, [id, setGameLoadingState])

    return { game, gameLoadingState }
}
