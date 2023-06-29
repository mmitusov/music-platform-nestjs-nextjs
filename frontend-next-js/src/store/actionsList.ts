import { setActiveTrack, setVolume, setDuration, setCurrentTime, setPause, setPlay } from "./slices/playerSlice";

//Список всех этих екшенов мы используем в нашем кастомном хуке - useGetAction
export {
    setActiveTrack, setVolume, setDuration, setCurrentTime, setPause, setPlay //Player Actions
}