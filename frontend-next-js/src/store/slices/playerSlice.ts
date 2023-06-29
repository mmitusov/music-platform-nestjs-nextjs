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
  volume: 30,
  duration: 0,
  currentTime: 0,
  isPaused: true
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveTrack: (state, action: PayloadAction<Track>) => {
      state.activeTrack = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setPause: (state) => {
      state.isPaused = true;
    },
    setPlay: (state) => {
      state.isPaused = false;
    }
  },
})

export const { setActiveTrack, setVolume, setDuration, setCurrentTime, setPause, setPlay } = playerSlice.actions
export default playerSlice.reducer