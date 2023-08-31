import { Game } from 'common/types.ts'
import { FIVE_MINUTES } from 'constants.tsx'
import { getCurrentTimestamp } from 'common/utils.ts'

export const setGameToLocaleStorage = (game: Game) => {
    const gameDataWithTimeStamp = {
        game,
        timestamp: getCurrentTimestamp(),
    }
    localStorage.setItem(String(game.id), JSON.stringify(gameDataWithTimeStamp))
}
const getGameFromLocaleStorage = (id: Game['id']) => {
    const gameFromLocaleStorage = localStorage.getItem(String(id))
    if (gameFromLocaleStorage) {
        return JSON.parse(gameFromLocaleStorage)
    }

    return null
}
export const getActualGameDataFromLocaleStorage = (id: Game['id']) => {
    const gameFromLocaleStorage = getGameFromLocaleStorage(id)

    if (!gameFromLocaleStorage) {
        return null
    }

    const currentTimestamp = getCurrentTimestamp()
    const localeStorageTimestamp = gameFromLocaleStorage?.timestamp

    if (currentTimestamp - localeStorageTimestamp <= FIVE_MINUTES) {
        return gameFromLocaleStorage.game
    }

    return null
}