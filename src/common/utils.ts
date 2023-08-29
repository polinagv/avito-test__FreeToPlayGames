import { Game } from './types.ts'
import { DataType } from '../constants.tsx'

export const mapGameDataToTableData = (game: Game): DataType => ({
    key: game.id,
    title: game.title,
    'release-date': game.release_date,
    category: game.genre,
    thumbnail: game.thumbnail,
    publisher: game.publisher,
    platform: game.platform,
})
