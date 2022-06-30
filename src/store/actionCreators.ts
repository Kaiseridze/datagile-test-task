export const actionIncrement = (index: number) => ({
	type: "INCREMENT",
	payload: { index },
});

export const actionDecrement = (index: number) => ({
	type: "DECREMENT",
	payload: { index },
});

export const addCounter = () => ({
	type: "ADD_COUNTER",
});

export const removeCounter = (index: number) => ({
	type: "REMOVE_COUNTER",
	payload: { index },
});
