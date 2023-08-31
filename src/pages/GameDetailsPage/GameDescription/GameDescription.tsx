import { Image } from 'antd'

import { Game } from 'common/types.ts'
import DescriptionField from 'components/DescriptionField/DescriptionField.tsx'
import { normalizeDate } from 'common/utils.ts'
import { DescriptionWrap } from 'pages/GameDetailsPage/styles.ts'
import SystemReqDescription from 'pages/GameDetailsPage/SystemReqDescription'

type Props = {
    game: Game
}
const GameDescription = ({ game }: Props) => {
    return (
        <DescriptionWrap>
            <Image src={game?.thumbnail} />
            <DescriptionField content={game?.description} />
            <DescriptionField label="Title" content={game?.title} />
            <DescriptionField
                label="Release date"
                content={normalizeDate(game?.release_date)}
            />
            <DescriptionField label="Publisher" content={game?.publisher} />
            <DescriptionField label="Developer" content={game?.developer} />
            <DescriptionField label="Genre" content={game?.genre} />

            <SystemReqDescription
                requirements={game?.minimum_system_requirements}
            />
        </DescriptionWrap>
    )
}

export default GameDescription
// название
// дата релиза (в российском формате)
// издатель
// разработчик
// жанр
// картинка/постер
// карусель скриншотов
// системные требования
