import { DataType, type GameShort } from './types.ts'

export const mapGameDataToTableData = (game: GameShort): DataType => ({
    key: game.id,
    title: game.title,
    'release-date': game.release_date,
    category: game.genre,
    thumbnail: game.thumbnail,
    publisher: game.publisher,
    platform: game.platform,
})

export const normalizeDate = (date: Date) =>
    new Date(date).toLocaleDateString('ru-Ru')

export const getCurrentTimestamp = () => new Date().getTime()
