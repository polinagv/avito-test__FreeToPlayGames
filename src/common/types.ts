export type GameShort = {
    id: number
    title: string
    thumbnail: string
    short_description: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    developer: string
    release_date: Date
    freetogame_profile_url: string
}

export type Game = {
    id: number
    title: string
    thumbnail: string
    status: string
    short_description: string
    description: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    developer: string
    release_date: Date
    freetogame_profile_url: string
    minimum_system_requirements: MinimumSystemRequirements
    screenshots: Screenshot[]
}

export type MinimumSystemRequirements = {
    os: string
    processor: string
    memory: string
    graphics: string
    storage: string
}

export type Screenshot = {
    id: number
    image: string
}
