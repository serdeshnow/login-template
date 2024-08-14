import './styles/App.scss';

function App() {
	return (
		<>
			<section className="login">
				<div className="login__wrapper">
					<div className="info__wrapper">
						<h1 className="info__title">Start your journey with us.</h1>
						<p className="info__subtitle">Simple sign up form</p>
						<ul className="info__list">
							<li className="info__item">React.js</li>
							<li className="info__item">useState()</li>
							<li className="info__item">useRef()</li>
							<li className="info__item">React Hook Form</li>
							<li className="info__item">Yup</li>
							<li className="info__item">-</li>
						</ul>
					</div>
					<form className="form">
						<h2 className="form__title">Sign up</h2>
						<div className="form__input-wrapper">
							<label className="form__input-label" htmlFor="email">
								Email
							</label>
							<input className="form__input" type="email" name="email" />
							<p className="form__error">Error Message</p>
						</div>
						<div className="form__input-wrapper">
							<label className="form__input-label" htmlFor="email">
								Email
							</label>
							<input className="form__input" type="email" name="email" />
							<p className="form__error">Error Message</p>
						</div>
						<div className="form__input-wrapper">
							<label className="form__input-label" htmlFor="email">
								Email
							</label>
							<input className="form__input" type="email" name="email" />
							<p className="form__error">Error Message</p>
						</div>
						<span>
							<button className="form__submit-button" type="submit">
								Create account
							</button>
						</span>
					</form>
				</div>
			</section>
		</>
	);
}

export default App;
