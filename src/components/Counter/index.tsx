import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { isN } from "../../utils/is-n-element";
import { ICounterProps } from "../../models";
import {
	actionIncrement,
	actionDecrement,
	removeCounter,
} from "../../store/actionCreators";

import "./Counter.css";

const Counter: FC<ICounterProps> = ({ id, value }) => {
	const dispatch = useDispatch();

	const onIncrement = () => {
		dispatch(actionIncrement(id));
	};

	const onDecrement = () => {
		dispatch(actionDecrement(id));
	};

	const onRemove = () => {
		dispatch(removeCounter(id));
	};

	useEffect(() => {
		if (isN(id, 4)) {
			const dispatchInterval = setInterval(
				() => dispatch(actionIncrement(id)),
				1000,
			);
			return () => clearInterval(dispatchInterval);
		}
	}, []);

	return (
		<div className='counter'>
			<div className='counter_inner'>
				<h1 className='counter_state'>{value}</h1>
				<>
					{isN(id, 4) ? (
						""
					) : (
						<div className='counter_options'>
							<button onClick={onIncrement}>+</button>
							<button onClick={onDecrement}>-</button>
						</div>
					)}
				</>
				<button onClick={onRemove}>Удалить счетчик</button>
			</div>
		</div>
	);
};

export default Counter;
