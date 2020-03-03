import React, { Component } from 'react';

import './film-page.css';

import FilterGender from '../filter-gender';

export default class FilmPage extends Component {

	state = {
		peopleList: null,
		totalheight: null,
		field: 'name',
		filter: 'none', // 'male', 'female', 'n/a', ...
	}

	componentDidMount() {

		this.props.service.getAllPeople()
			.then(peopleList => {
				this.setState({peopleList})
			})

		this.props.service.getTotalHeight()
		.then(totalheight => {
			this.setState({totalheight})
		});
	}
	componentDidUpdate(prevProps) {
		if (prevProps.service !== this.props.service) {
			this.props.service.getAllPeople()
			.then(peopleList => {
				this.setState({peopleList})
			})

			this.props.service.getTotalHeight()
			.then(totalheight => {
				this.setState({totalheight})
			});
		}
	}

	getResource = (arr) => {
		let order = 1;
		return arr.map(p => {
					return (
						<tr key={p.id}>
							<th scope="row">{order++}</th>
							<td>{p.name}</td>
							<td>{p.gender}</td>
							<td>{p.height}</td>
						</tr>
					)
				})
	}

	changeOrder = (field) => {
		this.setState({field})
	}

	onFilterGender = (filter) => {
		this.setState({filter})		
	}

	render() {
		const {title, summary} = this.props.service;
		const {peopleList, totalheight, field, filter} = this.state;
		if (!peopleList) {
			return null
		}
		let elements = [];
		let arr = [];
		if (filter === 'none') {
			arr = [...peopleList]
				.sort((a, b) => {
					if (a[field] < b[field]) {
						return -1
					} else {
						return 1
					}
				})
		} else {
			arr = [...(peopleList.filter(p => p.gender === filter))]
				.sort((a, b) => {
					if (a[field] < b[field]) {
						return -1
					} else {
						return 1
					}
				})
		}
		elements = this.getResource(arr)
		

		return (
			<div className="film-page">
				<h6>{title}</h6>
				<p>{summary}</p>
				<FilterGender filter={this.onFilterGender} />
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>#</th>
							<th className="term"
								onClick={() => this.changeOrder('name')}>Name</th>
							<th className="term"
								onClick={() => this.changeOrder('gender')}>Gender</th>
							<th className="term"
								onClick={() => this.changeOrder('height')}>Height(cm)</th>
						</tr>
					</thead>
					<tbody>
						{elements}
						<tr key={5}>
							<th scope="row">Total: {peopleList.length}</th>
							<td>-</td>
							<td>-</td>
							<td>Total: {totalheight}cm</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}