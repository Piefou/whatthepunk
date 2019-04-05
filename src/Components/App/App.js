import React, { Component } from 'react';
import styles from './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Filter } from '../Filter/Filter';
import { Card } from '../Card/Card';
import { Paginator } from '../Paginator/Paginator';
import { getBeers } from '../../lib/punkapi';
import { Submit } from '../Submit/Submit';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {
				abv: 0,
				ibu: 0,
				ebc: 0,
				name: '',
			},
			pagination: {
				page: 1,
				per_page: 6,
			},
			results: [],
		};
	}

	// Initial API request on page loading
	componentDidMount() {
		this.loadResults();
	}

	// Update the current page on state
	setPagination(page) {
		let pagination = this.state.pagination;
		pagination.page = page > 1 ? page : 1;
		this.setState({
			pagination: pagination,
		});
	}

	// Update the search filters on state
	setFilterValue(name, value) {
		let filters = this.state.filters;
		filters[name] = value;
		this.setState({
			filters: filters,
		});
	}

	// Create a beer card component from the PunkAPI response
	createBeerCards(beers) {
		return beers.map(e => (
			<Card
				key={`result${e.id}`}
				name={e.name}
				tagline={e.tagline}
				imgSrc={e.image_url}
				description={e.description}
				abv={e.abv}
				ibu={e.ibu}
				ebc={e.ebc}
				ph={e.ph}
			/>
		));
	}

	// Query the PunkAPI with the parameters in state
	loadResults() {
		getBeers({ ...this.state.filters, ...this.state.pagination }).then(
			response => {
				this.setState({
					results: this.createBeerCards(response),
				});
			}
		);
	}

	// When the search filters values are updated, state is updated
	handleFilterChange(e, n) {
		this.setFilterValue(n, e.target.value);
	}

	// When the user trigger a search query, reset the page to 1 and call the API
	handleSubmitClick(e) {
		e.preventDefault();
		this.setPagination(1);
		this.loadResults();
	}

	// when the user trigger a pagination change, call the API for the new page
	handlePaginationClick(e, p) {
		e.preventDefault();
		this.setPagination(p);
		this.loadResults();
	}

	render() {
		const currentPage = this.state.pagination.page;
		return (
			<>
				<Header title="What The Punk" />
				<main>
					<section id="searchForm">
						<form className={styles.flexContainer}>
							<Filter
								name="filter_abv"
								type="number"
								label="ABV"
								value={this.state.filters['abv']}
								onChange={e =>
									this.handleFilterChange(e, 'abv')
								}
							/>
							<Filter
								name="filter_ibu"
								type="number"
								label="IBU"
								value={this.state.filters['ibu']}
								onChange={e =>
									this.handleFilterChange(e, 'ibu')
								}
							/>
							<Filter
								name="filter_ebc"
								type="number"
								label="EBC"
								value={this.state.filters['ebc']}
								onChange={e =>
									this.handleFilterChange(e, 'ebc')
								}
							/>
							<Filter
								name="filter_name"
								type="text"
								label="Name"
								value={this.state.filters['name']}
								onChange={e =>
									this.handleFilterChange(e, 'name')
								}
							/>
							<Submit
								name="filter_submit"
								onClick={e => this.handleSubmitClick(e)}
							/>
							<Paginator
								currentPage={currentPage}
								onPrev={e =>
									this.handlePaginationClick(
										e,
										currentPage - 1
									)
								}
								onNext={e =>
									this.handlePaginationClick(
										e,
										currentPage + 1
									)
								}
							/>
						</form>
					</section>
					<section
						id="searchResults"
						className={styles.gridContainer}
					>
						{this.state.results}
					</section>
				</main>
				<Footer />
			</>
		);
	}
}
