import './Input.scss';
import { capitalizeWord } from '../../utils';
import React from 'react';

export const Input = ({ type, label = null, name, errorMessage, register }) => {
	return (
		<div className={errorMessage ? 'input__wrapper--has-error' : 'input__wrapper'}>
			<label className="input__label" htmlFor={name}>
				{label || capitalizeWord(name)}
			</label>
			<input
				className={errorMessage ? 'input--has-error' : 'input'}
				type={type}
				id={name}
				{...register(name)}
				autoComplete="off"
			/>
			{errorMessage && <p className="input__error">{errorMessage}</p>}
		</div>
	);
};
