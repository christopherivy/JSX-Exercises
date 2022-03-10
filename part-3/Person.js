const Person = (props) => {
	let { name, age } = props;
	let vote = age >= 18 ? "Go Vote!" : 'You must be 18 to vote!';


	let hobbies = [ 'Music', 'Gaming', 'Exercise' ];

	return (
		<div>
			<p>Learn some information about this person:</p>
			<h3>{ vote } </h3>
			<ul>
				<li> Name: { name.slice(0, 6) } </li>
				<li> Age: { age } </li>
				<li> Hobbies </li>
				<ul> { hobbies.map(h =>
					<li>{ h } </li>
				) } </ul>
			</ul>
		</div>
	);

};
