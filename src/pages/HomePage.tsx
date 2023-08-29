import GameList from '../components/GameList.tsx'

import { useFetchGamesList } from '../common/hooks.ts'
import { useState } from 'react'
import { type ListQueryParams } from '../api/games.ts'

const HomePage = () => {
    const [params, setParams] = useState<ListQueryParams>({})
    const { games } = useFetchGamesList(params)

    return <GameList games={games} setParams={setParams} />
}

export default HomePage
