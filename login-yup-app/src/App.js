import "./styles/App.scss";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Info } from "./components";
import { EMPTY_FORM_DATA, FORM_SCHEME } from "./constants";

function App() {
	// USE FORM
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: EMPTY_FORM_DATA,
		resolver: yupResolver(FORM_SCHEME),
	});

	// USE REF
	const submitButtonRef = useRef(null);

	// ERRORS
	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const rePasswordError = errors.rePassword?.message;

	// BUTTON GREY EFFECT
	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	// SUBMIT
	const onSubmit = (formData) => {
		reset(EMPTY_FORM_DATA);
		console.log(formData);
	};

	return (
		<section className="login">
			<div className="login__wrapper">
				<Info />
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<h2 className="form__title">Sign up</h2>
					<Input
						register={register}
						type="email"
						name="email"
						errorMessage={emailError}
					/>
					<Input
						register={register}
						type="password"
						name="password"
						errorMessage={passwordError}
					/>
					<Input
						register={register}
						type="password"
						name="rePassword"
						label="Re-enter password"
						errorMessage={rePasswordError}
					/>
					<span>
						<button
							className="form__submit-button"
							type="submit"
							ref={submitButtonRef}
							disabled={!isValid}
						>
							Create account
						</button>
					</span>
				</form>
			</div>
		</section>
	);
}

export default App;
