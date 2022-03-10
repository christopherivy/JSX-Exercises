// const NamedComponent = (props) => {
// 	let { name } = props;
// 	return (
// 		<p>My name is {name } </p>
// 	);
// };

// CAN BE DONE THIS WAY TOO (below)

const NamedComponent = ({ name }) => {
	// let { name } = props;
	return (
		<p>My name is {name } </p>
	);
};