export const isN = (id: number, n: number) =>
	(id + 1) % n === 0 ? true : false;
