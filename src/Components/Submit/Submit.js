import React from 'react';
import styles from './Submit.css';

export const Submit = props => {
	return (
		<span className={styles.flexItem}>
			<input
				className={styles.submitButton}
				type="submit"
				name={props.name}
				onClick={props.onClick}
			/>
		</span>
	);
};
