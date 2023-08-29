import type { ColumnsType } from 'antd/es/table'
import { Button } from 'antd'

export type DataType = {
    key: number
    title: string
    date: Date
    publisher: string
    genre: string
    thumbnail: string
}
export const gameTableColumns: ColumnsType<DataType> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (value, record) => (
            <Button type="link" href={String(record.key)} block>
                {value}
            </Button>
        ),
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Publisher',
        dataIndex: 'publisher',
        key: 'publisher',
    },
    {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre',
    },
    {
        title: 'Thumbnail',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
    },
]
