import GameItem from './GameItem/GameItem.tsx'
import { useFetchGameById } from '../../common/hooks.ts'
import { useParams } from 'react-router-dom'
import GameNotFound from './GameNotFound/GameNotFound.tsx'
import Spinner from '../../components/Spinner/Spinner.tsx'

const GameDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { game, gameLoadingState } = useFetchGameById(id)

    if (gameLoadingState === 'pending') {
        return <Spinner />
    }

    return game ? <GameItem game={game} /> : <GameNotFound />
}

export default GameDetailsPage
