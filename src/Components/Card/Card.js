import TruncateMarkup from 'react-truncate-markup';
import React from 'react';
import styles from './Card.css';

export const Card = props => {
	return (
		<article>
			<h3>{props.name}</h3>
			<p>{props.tagline}</p>
			<img
				src={props.imgSrc}
				className={styles.beerImage}
				alt={props.name + ' bottle image'}
			/>
			<h5>Description</h5>
			<p className={styles.truncated}>
				<TruncateMarkup lines={3}>
					<div>{props.description}</div>
				</TruncateMarkup>
			</p>
			<h5>Values</h5>
			<ul>
				<li>ABV : {props.abv}%</li>
				<li>IBU : {props.ibu}</li>
				<li>EBC : {props.ebc}</li>
				<li>Ph : {props.ph}</li>
			</ul>
		</article>
	);
};
