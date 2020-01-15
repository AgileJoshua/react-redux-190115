

export const FILTER_BY_CATEGORY = 'FILTER.BYCATEGORY'

interface FilterByCategoryAction{
    type: typeof FILTER_BY_CATEGORY,
    categoryName: string
}

export type FilterActionTypes = FilterByCategoryAction

export interface FilterState{
    categoryName: string
}