import { Table } from 'antd'
import { FC, useMemo } from 'react'

import { gameTableColumns } from '../constants.ts'
import { Game } from '../common/types.ts'
import { mapGameDataToTableData } from '../common/utils.ts'

type Props = {
    games: Game[]
}

const GameList: FC<Props> = ({ games }) => {
    const dataSource = useMemo(
        () => games.map((game) => mapGameDataToTableData(game)),
        [games]
    )

    return <Table dataSource={dataSource} columns={gameTableColumns} />
}

export default GameList
