import GameItem from '../components/GameItem.tsx'
import { useFetchGameById } from '../common/hooks.ts'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import GameNotFound from '../components/GameNotFound.tsx'

const GameDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { game, gameLoadingState } = useFetchGameById(id)

    if (gameLoadingState === 'pending') {
        return <Spin />
    }

    return game ? <GameItem game={game} /> : <GameNotFound />
}

export default GameDetailsPage
