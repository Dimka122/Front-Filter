import { create } from 'zustand'

export type BedType = 'any' | 'double' | 'single'

export interface FilterState {
	guests: number
	rooms: number
	bedType: BedType
	setFilters: (payload: Partial<FilterState>) => void
}

export const useFilterStore = create<FilterState>(set => ({
	guests: 2,
	rooms: 1,
	bedType: 'any',
	setFilters: payload => set(state => ({ ...state, ...payload }))
}))
