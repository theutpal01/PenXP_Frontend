import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import Blogs from "./pages/Blogs";
// import CreateBlog from "./pages/CreateBlog";

export default function App() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					{/* <Route path="/profile" element={<Profile />} /> */}
					{/* <Route path="/blogs" element={<Blogs />} /> */}
					{/* <Route path="/create" element={<CreateBlog />} /> */}
				</Routes>
			</Router>
		</div>
	);
}
