import React from 'react';
import styles from './Footer.css';

export const Footer = props => {
	return (
		<footer>
			<a
				className={styles.link}
				href="https://github.com/Piefou/whatthepunk"
			>
				Sources
			</a>{' '}
			- Theme inspired by the{' '}
			<a
				className={styles.link}
				href="https://evenbettermotherfucking.website/"
			>
				EvenBetterMotherfuckingWebsite
			</a>
		</footer>
	);
};
