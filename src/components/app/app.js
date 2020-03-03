import React, { Component } from 'react';

import './app.css';
import icon from './star-wars.jpg';

import SelectFilm from '../select-film';
import FilmPage from '../film-page';
import Row from '../row';
import {
    NewHopeService,
    AttackOfTheClones,
    ThePhantomMenace
} from '../../services';


export default class App extends Component {

    state = {
        service: 'none',
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

        if (service !== 'none') {
            return (
                <Row 
                    left={<SelectFilm selectFilm={this.SelectFilm} />}
                    right={<FilmPage service={service} />} />
            )
        } else {
            return (
                <Row 
                    left={<SelectFilm selectFilm={this.SelectFilm} />}
                    right={<img src={icon} alt='icon' />} />
            )
        }

        
    }
}