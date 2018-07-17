import React from 'react';

const HogwartsDetail = (props) => {
	if (!props.character) return null;
	return (
		<div>
			<h3>{props.character.name}</h3>
			<img src={props.character.image}  alt="" height="300"/>
			<p>House: {props.character.house}</p>
			<p>Patronus: {props.character.patronus}</p>
		</div>
	);
}

export default HogwartsDetail;