import { counterAction, ICounter, counterActionTypes } from "../../models";

const initialState: ICounter = {
	counters: [],
};

export const counterReducer = (
	state = initialState,
	action: counterAction,
): ICounter => {
	switch (action.type) {
		case counterActionTypes.INCREMENT:
			return {
				...state,
				counters: state.counters.map((counter: number, id: number) => {
					if (action.payload.index === id) {
						return (counter += 1);
					}
					return counter;
				}),
			};
		case counterActionTypes.DECREMENT:
			return {
				...state,
				counters: state.counters.map((counter: number, id: number) => {
					if (action.payload.index === id) {
						return (counter -= 1);
					}
					return counter;
				}),
			};
		case counterActionTypes.ADD_COUNTER:
			return {
				...state,
				counters: [
					...state.counters,
					state.counters.reduce((acc, item) => acc + item, 0),
				],
			};
		case counterActionTypes.REMOVE_COUNTER:
			return {
				...state,
				counters: state.counters.filter((_, id) => action.payload.index !== id),
			};
		default:
			return state;
	}
};

export default counterReducer;
