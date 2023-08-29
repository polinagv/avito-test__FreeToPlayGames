import { FC } from 'react'
import { Game } from '../common/types.ts'
import ScreenshotCarousel from './ScreenshotCarousel.tsx'

type Props = {
    game: Game
}
const GameItem: FC<Props> = ({ game }) => {
    return <ScreenshotCarousel screenshots={game.screenshots} />
}
export default GameItem
