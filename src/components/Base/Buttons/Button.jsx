import "./button.css";

function Button({ text, onClick }) {
	return (
		<button class="pushable" onClick={onClick}>
			<span class="shadow"></span>
			<span class="edge"></span>
			<span class="front"> {text} </span>
		</button>

	)
}

export default Button;