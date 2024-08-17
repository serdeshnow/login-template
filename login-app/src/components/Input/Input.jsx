import './Input.scss';
import { capitalizeWord } from '../../utils';

export const Input = ({
	type,
	name,
	label = null,
	onChange,
	onBlur,
	value,
	errorMessage,
}) => {
	return (
		<div className={errorMessage ? 'input__wrapper--has-error' : 'input__wrapper'}>
			<label className="input__label" htmlFor={name}>
				{label || capitalizeWord(name)}
			</label>
			<input
				className={errorMessage ? 'input--has-error' : 'input'}
				type={type}
				id={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				autoComplete="off"
			/>
			{errorMessage && <p className="input__error">{errorMessage}</p>}
		</div>
	);
};
