import { FC } from 'react'
import { Game } from '../../../common/types.ts'
import ScreenshotCarousel from '../../../components/ScreenshotCarousel/ScreenshotCarousel.tsx'
import GameDescription from '../GameDescription/GameDescription.tsx'
import styled from 'styled-components'

const GameItemWrap = styled.div`
    display: flex;
    flex-direction: column;
`

type Props = {
    game: Game
}
const GameItem: FC<Props> = ({ game }) => {
    return (
        <GameItemWrap>
            <GameDescription game={game} />
            <ScreenshotCarousel screenshots={game.screenshots} />
        </GameItemWrap>
    )
}
export default GameItem
