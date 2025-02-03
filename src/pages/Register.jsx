import { Link } from "react-router-dom"
import BG1 from "../components/Base/BGS/BG1"
import Button from "../components/Base/Buttons/Button"
import LineInput from "../components/Base/Inputs/LineInput"
import Form from "../components/Modals/Form"

function Register() {
	return (
		<div className="flex justify-center items-center h-screen">
			<BG1 />
			<Form heading={"Register"}>
				<div className="flex flex-col text-center z-10 space-y-4">
					<LineInput type="text" label="First Name" name="firstname" />
					<LineInput type="text" label="Last Name" name="lastname" />
					<LineInput type="text" label="Username" name="username" />
					<LineInput type="email" label="Email" name="email" />
					<LineInput type="password" label="Password" name="password" />
					<LineInput type="password" label="Confirm Password" name="c_password" />
				</div>
				<div className="pt-10 space-y-4 z-10 w-full flex flex-col items-center">
					<Button text="Sign Up" />
					<p className="text-sm text-right self-end">
						Already have an account?{" "}
						<Link to="/login" className="text-purple-600">Sign in</Link>
					</p>
				</div>
			</Form>
		</div>
	)
}

export default Register;