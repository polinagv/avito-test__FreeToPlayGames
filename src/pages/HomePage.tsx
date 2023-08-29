import GameList from '../components/GameList.tsx'

import { useState, useEffect } from 'react'
import { getGamesList } from '../api/games.ts'
import { Game } from '../common/types.ts'

const HomePage = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        getGamesList().then(({ data }) => {
            setGames(data)
            console.log(data)
        })
    }, [])

    return <GameList games={games} />
}

export default HomePage
