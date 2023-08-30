import GameItem from './GameItem/GameItem.tsx'
import { useParams } from 'react-router-dom'
import GameNotFound from './GameNotFound/GameNotFound.tsx'

import { useFetchGameById } from 'common/hooks.ts'
import Spinner from 'components/Spinner'
import ReturnButton from 'components/ReturnButton'
import { GameDetailsPageWrap } from 'pages/GameDetailsPage/styles.ts'

const GameDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { game, gameLoadingState } = useFetchGameById(id)

    if (gameLoadingState === 'pending') {
        return <Spinner />
    }

    return (
        <GameDetailsPageWrap>
            <ReturnButton to={'/'} />
            {game ? <GameItem game={game} /> : <GameNotFound />}
        </GameDetailsPageWrap>
    )
}

export default GameDetailsPage
