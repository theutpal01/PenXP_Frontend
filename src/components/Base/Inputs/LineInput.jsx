import "./lineinput.css"

function LineInput({ label, name, type }) {
	return (
		<input placeholder={label} className="input w-fit" name={name} type={type} />

	)
}

export default LineInput