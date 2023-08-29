import type { ColumnsType } from 'antd/es/table'

export type DataType = {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
}
export const gameTableColumns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
    },
]
