import React, { Component } from 'react';

import './film-page.css';

import FilterGender from '../filter-gender';

export default class FilmPage extends Component {

	state = {
		peopleList: null,
		arr: [],
		field: '',
	}

	componentDidMount() {
		this.getResource()
	}

	componentDidUpdate(prevprops) {
		if (prevprops.service !== this.props.service) {
			this.getResource();
		}
	}

	getResource = (arr = null) => {
		let order = 1;
		const peopleList =  (arr || this.props.service.getAllPeople())
			.map(p => {

				return (
					<tr key={p.id}>
						<th scope="row">{order++}</th>
						<td>{p.name}</td>
						<td>{p.gender}</td>
						<td>{p.height}</td>
					</tr>
				)
			})
		this.setState({peopleList})
	}

	getHeight = () => {
		return  this.props.service.getTotalHeight();
	}

	getTotal = () => {
		return this.props.service.getCount();
	}

	changeOrder = (field) => {
		const arr = [...this.props.service.getAllPeople()]
			.sort((a, b) => {
				if (a[field] < b[field]) {
					return -1
				} else {
					return 1
				}
			})
		this.getResource(arr)
	}

	onFilterGender = (field) => {
		if (field !== 'none') {
			const arr = [...this.props.service.getAllPeople()]
			.filter(p => p.gender === field);
		
			this.getResource(arr)
		} else {
			const arr = [...this.props.service.getAllPeople()];
			this.getResource(arr)
		}
		
	}

	render() {
		const {title, summary} = this.props.service;
		const {peopleList} = this.state;
		if (!peopleList) {
			return null
		}
		console.log(peopleList.length)
		const totalHeight = this.getHeight();
		const total = this.getTotal();
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
						{peopleList}
						<tr key={5}>
							<th scope="row">Total: {total}</th>
							<td>-</td>
							<td>-</td>
							<td>Total: {totalHeight}cm</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}