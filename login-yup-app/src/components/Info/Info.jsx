import './Info.scss';

// const TECH_DATA = ['React.js', 'useState()', 'useRef()', 'useEffect()', '+'];
const TECH_DATA_YUP = [
	'React.js',
	'useState()',
	'useRef()',
	'useEffect()',
	'React Hook Form',
	'Yup',
	'-',
];

export const Info = () => {
	return (
		<section className="info__wrapper">
			<h1 className="info__title">Start your journey with us.</h1>
			<p className="info__subtitle">Simple sign up form</p>
			<ul className="info__list">
				{TECH_DATA_YUP.map((item, index) => (
					<li className="info__item" key={index}>
						{item}
					</li>
				))}
			</ul>
		</section>
	);
};
