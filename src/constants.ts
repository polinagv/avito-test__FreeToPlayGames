import type { ColumnsType } from 'antd/es/table'

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
