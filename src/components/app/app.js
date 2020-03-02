import React, { Component } from 'react';

import './app.css';

import SelectFilm from '../select-film';
import FilmPage from '../film-page';
import {NewHopeService} from '../../services';


export default class App extends Component {

    state = {
        service: new NewHopeService(),
    }

    render() {
        const {service} = this.state;

        return (
            <div className="app">
                <div className="left-side">
                    <SelectFilm />
                </div>
                <div className="right-side">
                    <FilmPage service={service} />
                </div>
            </div>
        )
    }
}