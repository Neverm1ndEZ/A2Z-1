import { Routes, Route } from "react-router-dom";
import TaskOne from "./components/TaskOne";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<TaskOne />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
