import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useGetState = () => {
    //First - reading data from the store with useSelector
	const state = useSelector((state: RootState) => state);

    //Second - creating shortcut variables to get state from each slice 
	const player = state.player;
	const tracksList = state.tracksList;

    //Returning created shortcuts
	return {
		player,
		tracksList
	};
};
