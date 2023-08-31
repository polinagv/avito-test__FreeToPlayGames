import styled from 'styled-components'

import { Game } from 'common/types.ts'
import ScreenshotCarousel from 'components/ScreenshotCarousel/ScreenshotCarousel.tsx'
import { DescriptionHeader } from 'pages/GameDetailsPage/styles.ts'

import GameDescription from '../GameDescription/GameDescription.tsx'

const GameItemWrap = styled.div`
    display: flex;
    flex-direction: column;
`

type Props = {
    game: Game
}
const GameItem = ({ game }: Props) => {
    return (
        <GameItemWrap>
            <DescriptionHeader>{game.title}</DescriptionHeader>
            <GameDescription game={game} />
            <ScreenshotCarousel screenshots={game.screenshots} />
        </GameItemWrap>
    )
}
export default GameItem
