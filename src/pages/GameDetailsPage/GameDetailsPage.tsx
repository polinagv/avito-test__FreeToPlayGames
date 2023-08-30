import GameItem from './GameItem/GameItem.tsx'
import { useParams } from 'react-router-dom'
import GameNotFound from './GameNotFound/GameNotFound.tsx'

import { useFetchGameById } from 'common/hooks.ts'
import Spinner from 'components/Spinner'
import ReturnButton from 'components/ReturnButton'

const GameDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { game, gameLoadingState } = useFetchGameById(id)

    if (gameLoadingState === 'pending') {
        return <Spinner />
    }

    return (
        <>
            <ReturnButton to={'/'} />
            {game ? <GameItem game={game} /> : <GameNotFound />}
        </>
    )
}

export default GameDetailsPage
