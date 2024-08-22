import "./Input.scss";
import { capitalizeWord } from "../../utils";
import { forwardRef } from "react";

export const Input = forwardRef(
	({ type, label = null, name, errorMessage, register }, ref) => {
		return (
			<div className={errorMessage ? "input__wrapper--has-error" : "input__wrapper"}>
				<label className="input__label" htmlFor={name}>
					{label || capitalizeWord(name)}
				</label>
				<input
					className={errorMessage ? "input--has-error" : "input"}
					type={type}
					id={name}
					ref={ref}
					{...register(name)}
					autoComplete="off"
				/>
				{errorMessage && <p className="input__error">{errorMessage}</p>}
			</div>
		);
	},
);
