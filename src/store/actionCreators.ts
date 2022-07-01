import { counterActionTypes } from "../models";
export const actionIncrement = (index: number) => ({
	type: counterActionTypes.INCREMENT,
	payload: { index },
});

export const actionDecrement = (index: number) => ({
	type: counterActionTypes.DECREMENT,
	payload: { index },
});

export const addCounter = () => ({
	type: counterActionTypes.ADD_COUNTER,
});

export const removeCounter = (index: number) => ({
	type: counterActionTypes.REMOVE_COUNTER,
	payload: { index },
});
