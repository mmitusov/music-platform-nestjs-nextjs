import { setActiveTrack, setVolume, setDuration, setCurrentTime, setPause, setPlay } from "./slices/playerSlice";
import { fetchTracks, fetchSearchedTracks } from "./slices/tracksListSlice";

//Список всех этих екшенов мы используем в нашем кастомном хуке - useGetAction
export {
    setActiveTrack, setVolume, setDuration, setCurrentTime, setPause, setPlay, //Player Actions
    fetchTracks, fetchSearchedTracks //Tracks List extraReducers Actions
}