import { FILTERS_LOCAL_S_KEY } from 'constants.tsx'
import { Params } from 'common/types.ts'

export const setFiltersToLocaleStorage = (filters: Params) => {
    localStorage.setItem(FILTERS_LOCAL_S_KEY, JSON.stringify(filters))
}
export const getFiltersFromLocaleStorage = (): Params | null => {
    const filtersFromLocalS = localStorage.getItem(FILTERS_LOCAL_S_KEY)

    if (filtersFromLocalS) {
        return JSON.parse(filtersFromLocalS)
    }

    return null
}
