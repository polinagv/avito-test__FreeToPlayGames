import { getGamesList, ListQueryParams } from 'api/games.ts'
import { useEffect, useState } from 'react'
import { GameShort } from 'common/types.ts'
import { useLoadingState } from 'common/hooks.ts'

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