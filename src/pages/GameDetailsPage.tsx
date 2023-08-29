import GameItem from '../components/GameItem.tsx'
import { useFetchGameById } from '../common/hooks.ts'
import { useParams } from 'react-router-dom'

const GameDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { game } = useFetchGameById(id)

    return game ? <GameItem game={game} /> : null
}

export default GameDetailsPage
