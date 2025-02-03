import { Link } from "react-router-dom"
import BG1 from "../components/Base/BGS/BG1"
import Button from "../components/Base/Buttons/Button"
import LineInput from "../components/Base/Inputs/LineInput"
import Form from "../components/Modals/Form"

function Login() {
	return (
		<div className="flex justify-center items-center h-screen">
			<BG1 />
			<Form heading={"Login"}>
				<div className="pt-5 flex flex-col text-center z-10 space-y-4">
					<LineInput type="email" label="Email" name="email" />
					<LineInput type="password" label="Password" name="password" />
				</div>
				<div className="pt-10 space-y-4 z-10 w-full flex flex-col items-center">
					<Button text="Login" />
					<div className="self-end">
						<a className="text-sm text-purple-600 self-end" href="#">Forgot your password?</a>
						<p className="text-sm text-right self-end">
						No account?{" "}
						<Link to="/register" className="text-purple-600">Create one</Link>
					</p>
					</div>
				</div>
			</Form>
		</div>
	)
}

export default Login