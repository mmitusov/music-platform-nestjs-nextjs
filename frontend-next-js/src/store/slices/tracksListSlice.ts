import { Track } from '@/typings/tracks'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

interface trackName {
  trackName: string;
}

interface trackId {
  trackId: string;
}

export interface tracksState {
  tracksList: Track[];
  isLoading: boolean;
  fetchErr: string | undefined;
}

const initialState: tracksState = {
  tracksList: [],
  isLoading: false,
  fetchErr: ''
}

export const fetchTracks = createAsyncThunk( //Експортируем, так как мы будем использовать его как екшен
  'tracksList/fetchTracks', // Action type - нужен для типизации. Состоит из = name: 'tracksList', + созданная fetchTracks функция
  async () => {
    try {
      const response = await axios.get<Track[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL_TRACKS}`);
      const data = await response.data;
      return data;
    } catch (error) {
      throw new Error('Failed to fetch tracks');
    }
  }
)

export const fetchSearchedTracks = createAsyncThunk( //Експортируем, так как мы будем использовать его как екшен
  'tracksList/fetchSearchedTracks', // Action type - нужен для типизации. Состоит из = name: 'tracksList', + созданная fetchTracks функция
  async (query: trackName) => {
    try {
      const {trackName} = query;
      const response = await axios.get<Track[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL_SEARCH + trackName}`);
      const data = await response.data;
      return data;
    } catch (error) {
      throw new Error('Failed to fetch tracks');
    }
  }
)

export const deleteOneTrack = createAsyncThunk( //Експортируем, так как мы будем использовать его как екшен
  'tracksList/deleteOneTrack', // Action type - нужен для типизации. Состоит из = name: 'tracksList', + созданная fetchTracks функция
  async (query: trackId) => {
    try {
      const {trackId} = query;
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL_DELETE_TRACK + trackId}`);
      return trackId
    } catch (error) {
      throw new Error('Failed to delete track and corresponding comments');
    }
  }
)

export const tracksListSlice = createSlice({
  name: 'tracksList',
  initialState,

  reducers: {
    // Obj для обычных редюсеров, если таковые нужны/имеются
    // Можно это поле удалить. Оставил для наглядности
  },

  extraReducers(builder) {
    builder
      .addCase(fetchTracks.pending, (state) => { //Передаем fetchTracks = createAsyncThunk(), как - fetchTracks.pending
        state.isLoading = true;
      })
      .addCase(fetchTracks.fulfilled, (state, action)=> { //Передаем fetchTracks = createAsyncThunk(), как - fetchTracks.pending
        state.isLoading = false;
        state.fetchErr = '';
        state.tracksList = action.payload;
      })
      .addCase(fetchTracks.rejected, (state, action) => { //Передаем fetchTracks = createAsyncThunk(), как - fetchTracks.pending
        state.isLoading = false;
        state.fetchErr = action.error.message || 'Unknown Error occurred';
      }),

    builder
      .addCase(fetchSearchedTracks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchedTracks.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.fetchErr = '';
        state.tracksList = action.payload;
      })
      .addCase(fetchSearchedTracks.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchErr = action.error.message || 'Unknown Error occurred';
      }),
      
    builder
      .addCase(deleteOneTrack.pending, (state) => {
        state.isLoading = true;
      })
      //Find index of removed track and delete it from state.tracksList
      .addCase(deleteOneTrack.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.fetchErr = '';
        const newArr = state.tracksList.filter(track => {
          return track._id !== action.payload;
        });
        state.tracksList = [...newArr];
      })
      .addCase(deleteOneTrack.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchErr = action.error.message || 'Unknown Error occurred';
      })
  }
})

export default tracksListSlice.reducer