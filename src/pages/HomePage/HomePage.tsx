import GameList from './GameList/GameList.tsx'

import { useFetchGamesList } from 'common/hooks.ts'
import { useState } from 'react'
import { type ListQueryParams } from 'api/games.ts'
import Spinner from 'components/Spinner/Spinner.tsx'

const HomePage = () => {
    const [params, setParams] = useState<ListQueryParams>({})
    const { games, gamesLoadingState } = useFetchGamesList(params)

    if (gamesLoadingState === 'pending') {
        return <Spinner />
    }

    return <GameList games={games} setParams={setParams} />
}

export default HomePage
