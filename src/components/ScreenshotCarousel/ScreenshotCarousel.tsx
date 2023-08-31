import { Carousel, Image } from 'antd'

import { Game } from 'common/types.ts'

type Props = {
    screenshots: Game['screenshots']
}
const ScreenshotCarousel = ({ screenshots }: Props) => {
    return (
        <Carousel autoplay>
            {screenshots.map((screen) => (
                <Image src={screen.image} key={screen.id} />
            ))}
        </Carousel>
    )
}

export default ScreenshotCarousel
