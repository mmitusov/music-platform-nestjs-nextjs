import { Track } from '@/typings/tracks'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerState {
  activeTrack: null | Track;
  volume: number;
  duration: number;
  currentTime: number;
  isPaused: boolean;
}

const initialState: PlayerState = {
  activeTrack: null,
  volume: 0,
  duration: 0,
  currentTime: 0,
  isPaused: true
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    activeTrack: (state, action: PayloadAction<Track>) => {
      state.activeTrack = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    duration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    currentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    pauseAndPlay: (state) => {
      state.isPaused = !state.isPaused;
    }
  },
})

export const { activeTrack, setVolume, duration, currentTime, pauseAndPlay} = playerSlice.actions
export default playerSlice.reducer