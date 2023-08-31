import GameList from './GameList/GameList.tsx'

import { useShowErrorNotification } from 'common/hooks.ts'
import { useState } from 'react'
import { type ListQueryParams } from 'api/games.ts'
import { HomePageWrap } from 'pages/HomePage/styles.ts'

import { useFetchGamesList } from 'pages/HomePage/hooks.ts'

const HomePage = () => {
    const [params, setParams] = useState<ListQueryParams>({})
    const { games, gamesLoadingState } = useFetchGamesList(params)
    const notification = useShowErrorNotification({
        loadingState: gamesLoadingState,
    })

    return (
        <HomePageWrap>
            {notification}
            <GameList
                games={games}
                setParams={setParams}
                loadingState={gamesLoadingState}
            />
        </HomePageWrap>
    )
}

export default HomePage
