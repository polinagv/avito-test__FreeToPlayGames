import { useEffect, useState } from 'react'
import { Game } from './types.ts'
import { getGamesList } from '../api/games.ts'

export const useFetchGamesList = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        getGamesList().then(({ data }) => {
            setGames(data)
            console.log(data)
        })
    }, [])

    return [games]
}
