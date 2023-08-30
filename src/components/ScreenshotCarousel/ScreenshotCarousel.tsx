import { FC } from 'react'
import { Carousel, Image } from 'antd'
import { Game } from '../../common/types.ts'

type Props = {
    screenshots: Game['screenshots']
}
const ScreenshotCarousel: FC<Props> = ({ screenshots }) => {
    return (
        <Carousel autoplay>
            {screenshots.map((screen) => (
                <Image src={screen.image} key={screen.id} />
            ))}
        </Carousel>
    )
}

export default ScreenshotCarousel
