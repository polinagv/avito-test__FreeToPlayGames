import { Button, Image, Table, TableProps } from 'antd'

import { useNavigate } from 'react-router-dom'
import { FC, useMemo, Dispatch, SetStateAction } from 'react'

import { categoryFilters, DataType, platformFilters } from '../constants.tsx'
import { GameShort } from '../common/types.ts'
import { mapGameDataToTableData } from '../common/utils.ts'
import { ListQueryParams } from '../api/games.ts'

type Props = {
    games: GameShort[]
    setParams: Dispatch<SetStateAction<ListQueryParams>>
}

const GameList: FC<Props> = ({ games, setParams }) => {
    const navigate = useNavigate()
    const dataSource = useMemo(
        () => games.map((game) => mapGameDataToTableData(game)),
        [games]
    )

    const handleChange: TableProps<DataType>['onChange'] = (
        pagination,
        filters,
        sorter
    ) => {
        console.log(pagination, filters, sorter)
        setParams((prevState) => ({
            ...prevState,
            'sort-by':
                sorter.order &&
                (sorter.columnKey === 'title'
                    ? 'alphabetical'
                    : sorter.columnKey || undefined),
            category: filters.category || undefined,
            platform: filters.platform || undefined,
        }))
    }

    return (
        <Table dataSource={dataSource} onChange={handleChange}>
            <Table.Column
                title="Title"
                dataIndex="title"
                key="title"
                sorter
                render={(value, record: DataType) => (
                    <Button
                        type="link"
                        onClick={() => navigate(`/${record.key}`)}
                    >
                        {value}
                    </Button>
                )}
            />
            <Table.Column
                title="Date"
                dataIndex="release-date"
                key="release-date"
                sorter
            />
            <Table.Column
                title="Genre"
                dataIndex="category"
                key="category"
                filters={categoryFilters}
                filterMode="menu"
            />
            <Table.Column
                title="Platform"
                dataIndex="platform"
                key="platform"
                filters={platformFilters}
                filterMode="menu"
            />
            <Table.Column
                title="Publisher"
                dataIndex="publisher"
                key="publisher"
            />
            <Table.Column
                title="Thumbnail"
                dataIndex="thumbnail"
                key="thumbnail"
                render={(_, record: DataType) => (
                    <Image
                        alt={record.title}
                        width={200}
                        src={record.thumbnail}
                    />
                )}
            />
        </Table>
    )
}

export default GameList
