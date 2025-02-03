import "./form.css"

function Form({ heading, children }) {
	return (
		<form action="" className="form_main w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-lg">
			<p className="heading">{heading}</p>
			{children}
		</form>

	)
}

export default Form