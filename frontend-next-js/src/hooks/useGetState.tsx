import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useGetState = () => {
	//Reading data from the store with useSelector
	//And creating shortcut variables to get state from each slice 
	const playerState = useSelector((state: RootState) => state.player);
	const tracksListState = useSelector((state: RootState) => state.tracksList);

	//Returning created shortcuts
	return {
		playerState,
		tracksListState
	};

	//Если попытаться вернуть весь стейт разом, а только потом его деструктуризировать, то можно получить следующею ошибку:
	//Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
	//Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.

	//Пример:
    // //First - reading data from the store with useSelector
	// const state = useSelector((state: RootState) => state);

    // //Second - creating shortcut variables to get state from each slice 
	// // const player = state.player;
	// // const tracksList = state.tracksList;	

    // //Returning created shortcuts
	// return {
	// 	player,
	// 	tracksList
	// };
};
