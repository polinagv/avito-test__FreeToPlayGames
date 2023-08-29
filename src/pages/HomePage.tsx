import GameList from '../components/GameList.tsx'

import { useState, useEffect } from 'react'
import { getGamesList } from '../api/games.ts'

const HomePage = () => {
    const [games, setGames] = useState()

    useEffect(() => {
        getGamesList().then(({ data }) => {
            setGames(data)
        })
    }, [])

    return <GameList />
}

export default HomePage
