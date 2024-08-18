import './styles/App.scss';
// import { useState, useEffect, useRef } from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Info } from './components';
import { EMPTY_FORM_DATA, FORM_SCHEME } from './constants';

function App() {
	// USE STATE
	const [hasError, setHasError] = useState(false);

	// USE FORM
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: EMPTY_FORM_DATA,
		resolver: yupResolver(FORM_SCHEME),
	});

	// USE REF //-- DOESN'T WORK --//
	// const submitButtonRef = useRef(null);

	// ERRORS
	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const rePasswordError = errors.rePassword?.message;

	// BUTTON GREY EFFECT
	useEffect(() => {
		let newHasError = false;

		if (emailError || passwordError || rePasswordError) {
			newHasError = true;
		}
		setHasError(newHasError);
	}, [emailError, passwordError, rePasswordError]);

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
						type="email"
						name="email"
						register={register}
						errorMessage={emailError}
					/>
					<Input
						type="password"
						name="password"
						register={register}
						errorMessage={passwordError}
					/>
					<Input
						type="password"
						name="rePassword"
						label="Re-enter password"
						register={register}
						errorMessage={rePasswordError}
					/>
					<span>
						<button
							className="form__submit-button"
							type="submit"
							// ref={submitButtonRef}
							disabled={hasError}
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
