import axios from 'axios'

const API_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/'

// Это надо бы скрыть)
const headers = {
    'X-RapidAPI-Key': 'a565fdba14msh880efa0d9260345p161633jsn158e30b4e0f3',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
}

const net = axios.create({
    baseURL: API_BASE_URL,
    headers,
    timeout: 3000,
})

export const getGamesList = () => net.get('/games')

export const getGameById = (id: string) => net.get(`/game?id=${id}`)
