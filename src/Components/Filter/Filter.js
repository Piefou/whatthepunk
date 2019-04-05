import React from 'react';
import styles from './Filter.css';

export const Filter = props => {
	return (
		<span className={styles.flexItem}>
			<label className={styles.filterLabel} htmlFor={props.name}>
				{props.label} >=
			</label>
			<input
				className={styles.filterField}
				type={props.type}
				name={props.name}
				onChange={props.onChange}
			/>
		</span>
	);
};
