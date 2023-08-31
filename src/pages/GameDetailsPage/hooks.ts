import { getGameById } from 'api/games.ts'
import { useEffect, useState } from 'react'
import { Game } from 'common/types.ts'
import { useLoadingState } from 'common/hooks.ts'
import {
    getActualGameDataFromLocaleStorage,
    setGameToLocaleStorage,
} from 'cache/gameCache.ts'

export const useFetchGameById = (id: Game['id'] | undefined) => {
    const [game, setGame] = useState<Game | undefined>(
        id ? getActualGameDataFromLocaleStorage(id) : null
    )
    const [gameLoadingState, setGameLoadingState] = useLoadingState()

    useEffect(() => {
        setGameLoadingState('pending')

        if (game) {
            setGameLoadingState('resolved')
            return
        }

        getGameById(id)
            .then(({ data }) => {
                setGameLoadingState('resolved')
                setGame(data)
                setGameToLocaleStorage(data)
            })
            .catch(() => {
                setGameLoadingState('rejected')
            })
    }, [game, id, setGameLoadingState])

    return { game, gameLoadingState }
}
