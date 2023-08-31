import { useState } from 'react'

import { useShowErrorNotification } from 'common/hooks.ts'
import { HomePageWrap } from 'pages/HomePage/styles.ts'
import { useFetchGamesList } from 'pages/HomePage/hooks.ts'
import { getFiltersFromLocaleStorage } from 'cache/filtersCache.ts'
import { Params } from 'common/types.ts'

import GameList from './GameList/GameList.tsx'

const HomePage = () => {
    const filtersFromLocaleStorage = getFiltersFromLocaleStorage()
    const [params, setParams] = useState<Params>(filtersFromLocaleStorage || {})

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
