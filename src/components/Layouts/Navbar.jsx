import { useAuthStore } from "../../context/authContext";

export default function Navbar() {
	const { isAuthenticated, login, logout } = useAuthStore();

	return (
		<nav className="bg-blue-600 text-white p-4 flex justify-between">
			<Link to="/" className="text-lg font-bold">
				PenXP
			</Link>
			<div className="space-x-4">
				<Link to="/blogs">Blogs</Link>
				{isAuthenticated ? (
					<>
						<button onClick={logout}>Logout</button>
						<Link to="/profile">Profile</Link>
					</>
				) : (
					<button onClick={login}>Login</button>
				)}
			</div>
		</nav>
	);
}
