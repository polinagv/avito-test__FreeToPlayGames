export type DataType = {
    key: number
    title: string
    'release-date': Date
    publisher: string
    category: string
    thumbnail: string
    platform: string
}

export const categoryFilters = [
    {
        text: 'Action',
        value: 'action',
    },
    {
        text: 'Mmorpg',
        value: 'mmorpg',
    },
    {
        text: 'Shooter',
        value: 'shooter',
    },
    {
        text: 'Sports',
        value: 'sports',
    },
    {
        text: 'Anime',
        value: 'anime',
    },
]
export const platformFilters = [
    {
        text: 'PC',
        value: 'pc',
    },
    {
        text: 'Browser',
        value: 'browser',
    },
]
