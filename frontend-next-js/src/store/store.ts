import { configureStore } from '@reduxjs/toolkit'
import playerReduser from './slices/playerSlice'
import tracksListReduser from './slices/tracksListSlice'

export const store = configureStore({
  reducer: {
    player: playerReduser,
    tracksList: tracksListReduser
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch