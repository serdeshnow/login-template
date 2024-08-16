import './styles/App.scss';
import Info from './components/Info/Info';
import Input from './components/Input/Input';
import { useState } from 'react';

function App() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rePassword: '',
	});

	const updateChange = (inputName, value) => {
		setFormData({ ...formData, [inputName]: value });
	};

	const onChange = ({ target }) => {
		updateChange(target.name, target.value);
		// console.log('target:', target.name, target.value);
	};

	return (
		<section className="login">
			<div className="login__wrapper">
				<Info />
				<form className="form">
					<h2 className="form__title">Sign up</h2>
					<Input type="email" onChange={onChange} value={formData.email} />
					<Input type="password" onChange={onChange} value={formData.password} />
					<Input
						type="password"
						name="rePassword"
						label="Re-enter password"
						onChange={onChange}
						value={formData.rePassword}
					/>
					<span>
						<button className="form__submit-button" type="submit">
							Create account
						</button>
					</span>
				</form>
			</div>
		</section>
	);
}

export default App;
