import { configureStore } from '@reduxjs/toolkit'
import playerReduser from './slices/playerSlice'

export const store = configureStore({
  reducer: {
    player: playerReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch