import React, { Component } from 'react';

import './select-film.css';

export default class SelectFilm extends Component {

    state = {
        selectedFilm: 'Choose...',
    }

    handleChange = (e) => {
        this.setState({
            selectedFilm: e.target.value
        })
    }

    render() {

        return (
            <div className="select-film form-group">
                <select className="form-control"
                        id="exampleFormControlSelect2"
                        value={this.state.selectedFilm}
                        onChange={this.handleChange}>
                    <option value="Choose..." disabled>
                        Choose...
                    </option>
                    <option value="new-hope">
                        A New Hope
                    </option>
                    <option value="attack-of-the-clones">
                        Attack of the Clones
                    </option>
                    <option value="the-phantom-menace">
                        The Phantom Menace
                    </option>
                    <option value="revenge-of-the-sith">
                        Revenge of the Sith
                    </option>
                    <option value="return-of-the-jedi">
                        Return of the Jedi
                    </option>
                    <option value="the-empire-strikes-back">
                        The Empire Strikes Back
                    </option>
                    <option value="the-force-awakens">
                        The Force Awakens
                    </option>
                </select>
            </div>
        )
    }
}