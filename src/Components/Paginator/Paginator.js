import React from 'react';
import styles from './Paginator.css';

export const Paginator = props => {
	return (
		<span className={styles.flexItem}>
			<button name="previousPage" onClick={props.onPrev}>
				&lt;
			</button>
			<span className={styles.labelPage}>Page {props.currentPage}</span>
			<button name="nextPage" onClick={props.onNext}>
				&gt;
			</button>
		</span>
	);
};
