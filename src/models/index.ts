export interface ICounter {
	counters: number[];
}

export interface ICounterProps {
	id: number;
	value: number;
}

export type counterAction =
	| ICounterIncrement
	| ICounterDecrement
	| ICounterAddCounter
	| ICounterRemoveCounter;

export enum counterActionTypes {
	INCREMENT = "INCREMENT",
	DECREMENT = "DECREMENT",
	ADD_COUNTER = "ADD_COUNTER",
	REMOVE_COUNTER = "REMOVE_COUNTER",
}

interface ICounterIncrement {
	type: counterActionTypes.INCREMENT;
	payload: { index: number };
}

interface ICounterDecrement {
	type: counterActionTypes.DECREMENT;
	payload: { index: number };
}

interface ICounterAddCounter {
	type: counterActionTypes.ADD_COUNTER;
}

interface ICounterRemoveCounter {
	type: counterActionTypes.REMOVE_COUNTER;
	payload: { index: number };
}

export interface ILayout {
	children: React.ReactNode;
}
