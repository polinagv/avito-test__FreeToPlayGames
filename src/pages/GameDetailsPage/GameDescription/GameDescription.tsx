import { Game } from 'common/types.ts'
import { FC } from 'react'
import DescriptionField from 'components/DescriptionField/DescriptionField.tsx'
import { normalizeDate } from 'common/utils.ts'
import styled from 'styled-components'

const DesriptionWrap = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;
`

type Props = {
    game: Game
}
const GameDescription: FC<Props> = ({ game }) => {
    return (
        <DesriptionWrap>
            <DescriptionField content={game.thumbnail} image />
            <DescriptionField label={'Title'} content={game.title} />
            <DescriptionField
                label={'Release date'}
                content={normalizeDate(game.release_date)}
            />
            <DescriptionField label={'Publisher'} content={game.publisher} />
            <DescriptionField label={'Developer'} content={game.developer} />
            <DescriptionField label={'Genre'} content={game.genre} />

            {/*<DescriptionField*/}
            {/*    label={'System requirements'}*/}
            {/*    content={game.minimum_system_requirements.}*/}
            {/*/>*/}
        </DesriptionWrap>
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
