import React from 'react';
import styles from './Header.css';

export const Header = props => {
	return (
		<header>
			<h1>
				<a className={styles.titleLink} href="/">
					{props.title}
				</a>
			</h1>
			<h5>
				Search UI for the{' '}
				<a className={styles.link} href="https://punkapi.com/">
					Punk API
				</a>{' '}
				-{' '}
				<a
					className={styles.link}
					href="https://twitter.com/samjbmason"
				>
					@samjbmason
				</a>
			</h5>
		</header>
	);
};
