import GameList from './GameList/GameList.tsx'

import { useFetchGamesList } from 'common/hooks.ts'
import { useState } from 'react'
import { type ListQueryParams } from 'api/games.ts'
import Spinner from 'components/Spinner/Spinner.tsx'
import { HomePageWrap } from 'pages/HomePage/styles.ts'

const HomePage = () => {
    const [params, setParams] = useState<ListQueryParams>({})
    const { games, gamesLoadingState } = useFetchGamesList(params)

    if (gamesLoadingState === 'pending') {
        return <Spinner />
    }

    return (
        <HomePageWrap>
            <GameList games={games} setParams={setParams} />
        </HomePageWrap>
    )
}

export default HomePage
