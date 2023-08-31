import { Button, Image, Table, TableProps } from 'antd'

import { useNavigate } from 'react-router-dom'
import { Dispatch, SetStateAction, useMemo } from 'react'

import { categoryFilters, platformFilters } from 'constants.tsx'
import { DataType, GameShort } from 'common/types.ts'
import { mapGameDataToTableData, normalizeDate } from 'common/utils.ts'
import { ListQueryParams } from 'api/games.ts'
import { LoadingState } from 'common/hooks.ts'

type Props = {
    games: GameShort[]
    setParams: Dispatch<SetStateAction<ListQueryParams>>
    loadingState: LoadingState
}

const GameList = ({ games, setParams, loadingState }: Props) => {
    const navigate = useNavigate()
    const dataSource = useMemo(
        () => games.map((game) => mapGameDataToTableData(game)),
        [games]
    )

    const handleChange: TableProps<DataType>['onChange'] = (
        _pagination,
        filters,
        sorter,
        extra
    ) => {
        if (extra.action === 'paginate') {
            return
        }

        const sortEnabled = Boolean(sorter.order)
        const filedName = sorter.columnKey

        const sortBy =
            sortEnabled && (filedName === 'title' ? 'alphabetical' : filedName)

        setParams((prevState) => ({
            ...prevState,
            'sort-by': sortBy || undefined,
            category: filters.category || undefined,
            platform: filters.platform || undefined,
        }))
    }

    return (
        <Table
            loading={loadingState === 'pending'}
            dataSource={dataSource}
            onChange={handleChange}
            size={'small'}
            locale={{
                emptyText: 'No games found',
            }}
        >
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
                responsive={['lg', 'xl', 'xxl']}
                render={(value) => normalizeDate(value)}
            />
            <Table.Column
                title="Genre"
                dataIndex="category"
                key="category"
                filters={categoryFilters}
                filterMode="menu"
                responsive={['lg', 'xl', 'xxl']}
            />
            <Table.Column
                title="Platform"
                dataIndex="platform"
                key="platform"
                filters={platformFilters}
                filterMode="menu"
                responsive={['md', 'lg', 'xl', 'xxl']}
            />
            <Table.Column
                title="Publisher"
                dataIndex="publisher"
                key="publisher"
                responsive={['md', 'lg', 'xl', 'xxl']}
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
                        placeholder={
                            <Image
                                alt={'placeholder'}
                                src="public/placeholder.svg"
                            />
                        }
                    />
                )}
                responsive={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']}
            />
        </Table>
    )
}

export default GameList
