import "./App.css";
import { useStore, actions } from "./store";

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

export default function App() {
	const [state, dispatch] = useStore();
	const { todos, todoInput } = state;

	const handleAdd = () => {
		dispatch(actions.add_todo(todoInput));
	};

	return (
		<div>
			<input
				type="text"
				value={todoInput}
				placeholder="Enter todo"
				onChange={(e) => {
					dispatch(actions.setTodoInput(e.target.value));
				}}
			/>
			<button onClick={handleAdd}>Add</button>
			{todos.map((todo, index) => (
				<li key={index}>{todo}</li>
			))}
		</div>
	);
}
