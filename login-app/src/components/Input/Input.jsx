import './Input.scss';
import { capitalizeWord } from '../../utils';

const Input = ({ type, name = null, label = null, onChange, value }) => {
	return (
		<div className="form__input-wrapper">
			<label className="form__input-label" htmlFor={name || type}>
				{label || capitalizeWord(type)}
			</label>
			<input
				className="form__input"
				type={type}
				name={name || type}
				onChange={onChange}
				value={value}
			/>
			<p className="form__error">Error Message</p>
		</div>
	);
};

export default Input;
