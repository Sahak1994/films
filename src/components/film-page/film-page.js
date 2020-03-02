import React, { Component } from 'react';

import './film-page.css';

import FilterGender from '../filter-gender';

export default class FilmPage extends Component {

    state = {
        peopleList: null,
        totalCount: null,
        totalHeight: null,
    }

    getResource = () => {
        return this.props.service.getAllPeople()
            .map(p => {

                return (
                    <tr key={p.id}>
                        <th scope="row">{p.id}</th>
                        <td>{p.name}</td>
                        <td>{p.gender}</td>
                        <td>{p.height}</td>
                    </tr>
                )
            })
            
    }

    getHeight = () => {
        return  this.props.service.getTotalHeight()
    }

    render() {
        const {title, summary} = this.props.service;
        const elements = this.getResource();
        const totalHeight = this.getHeight()
        return (
            <div className="film-page">
                <h6>{title}</h6>
                <p>{summary}</p>
                <FilterGender />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="term">Name</th>
                            <th className="term">Gender</th>
                            <th className="term">Height(cm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                        <tr key={5}>
                            <th scope="row">Total: {elements.length}</th>
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