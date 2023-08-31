import GameList from './GameList/GameList.tsx'

import { useFetchGamesList, useShowErrorNotification } from 'common/hooks.ts'
import { useState } from 'react'
import { type ListQueryParams } from 'api/games.ts'
import Spinner from 'components/Spinner/Spinner.tsx'
import { HomePageWrap } from 'pages/HomePage/styles.ts'

const HomePage = () => {
    const [params, setParams] = useState<ListQueryParams>({})
    const { games, gamesLoadingState } = useFetchGamesList(params)
    const notification = useShowErrorNotification({
        loadingState: gamesLoadingState,
    })

    if (gamesLoadingState === 'pending') {
        return <Spinner />
    }

    return (
        <HomePageWrap>
            {notification}
            <GameList games={games} setParams={setParams} />
        </HomePageWrap>
    )
}

export default HomePage
