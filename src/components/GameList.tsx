import { Table } from 'antd'
import { FC } from 'react'

import { gameTableColumns, type DataType } from '../constants.ts'

type Props = {
    dataSource: DataType[]
}

const GameList: FC<Props> = ({ dataSource }) => {
    return <Table dataSource={dataSource} columns={gameTableColumns} />
}

export default GameList

// название
// дата релиза (в российском формате)
// издатель
// жанр
// картинка
