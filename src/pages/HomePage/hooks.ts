import { useEffect, useState } from 'react'

import { getGamesList } from 'api/games.ts'
import { GameShort, Params } from 'common/types.ts'
import { useLoadingState } from 'common/hooks.ts'

export const useFetchGamesList = (params: Params) => {
    const [games, setGames] = useState<GameShort[]>([])
    const [gamesLoadingState, setGamesLoadingState] = useLoadingState()

    useEffect(() => {
        setGamesLoadingState('pending')
        getGamesList({
            platform: params?.platform,
            category: params?.category,
            'sort-by': params?.sortBy,
        })
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
