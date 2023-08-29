import GameList from '../components/GameList.tsx'

import { useFetchGamesList } from '../common/hooks.ts'

const HomePage = () => {
    const { games } = useFetchGamesList()

    return <GameList games={games} />
}

export default HomePage
