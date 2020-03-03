import React, { Component } from 'react';

import './app.css';

import SelectFilm from '../select-film';
import FilmPage from '../film-page';
import {
    NewHopeService,
    AttackOfTheClones,
    ThePhantomMenace
} from '../../services';


export default class App extends Component {

    state = {
        service: new NewHopeService(),
    }

    SelectFilm = (serviceName) => {
        switch(serviceName) {
            case 'new-hope':
                this.setState({service: new NewHopeService()});
                return
            case 'attack-of-the-clones':
                this.setState({service: new AttackOfTheClones()});
                return
            case 'the-phantom-menace':
                this.setState({service: new ThePhantomMenace()});
        }
    }

    render() {
        const {service} = this.state;

        return (
            <div className="app">
                <div className="left-side">
                    <SelectFilm selectFilm={this.SelectFilm} />
                </div>
                <div className="right-side">
                    <FilmPage service={service} />
                </div>
            </div>
        )
    }
}