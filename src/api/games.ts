import axios from 'axios'
import { stringify } from 'qs'

import { type Game, type GameShort } from '../common/types.ts'

const API_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/'

// Это надо бы скрыть)
const headers = {
    'X-RapidAPI-Key': 'a565fdba14msh880efa0d9260345p161633jsn158e30b4e0f3',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
}

const net = axios.create({
    baseURL: API_BASE_URL,
    headers,
    timeout: 5000,
})

export type ListQueryParams =
    | {
          'sort-by'?: string
          platform?: string
          category?: string
      }
    | object

export const getGamesList = (params: ListQueryParams) =>
    net.get<GameShort[]>('/games', {
        params,
        paramsSerializer: (params) =>
            stringify(params, { encode: false, arrayFormat: 'repeat' }),
    })

export const getGameById = (id: Game['id'] | undefined) =>
    net.get<Game>(`/game?id=${id}`)
