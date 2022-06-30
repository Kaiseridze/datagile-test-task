import Counter from "../components/Counter";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { addCounter } from "../store/actionCreators";
const Home = () => {

	const dispatch = useDispatch();
	const { counters } = useTypedSelector((state) => state.counterReducer);

	const createCounter = () => {
		dispatch(addCounter());
	};
	return (
		<div className="home">
			{!counters.length && <h1>Добавьте счетчик</h1>}
			{counters.map((counter: number, id: number) => (
				<Counter value={counter} id={id} key={id} />
			))}
			<button onClick={createCounter}>Добавить счетчик</button>
		</div>
	);
}

export default Home;
