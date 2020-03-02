import React, { Component } from 'react';

import './select-film.css';

export default class SelectFilm extends Component {

    render() {

        return (
            <div className="select-film form-group">
                <select className="form-control" id="exampleFormControlSelect2">
                    <option selected disabled>Choose...</option>
                    <option value="new-hope">A New Hope</option>
                    <option value="attack-of-the-clones">Attack of the Clones</option>
                    <option value="the-phantom-menace">The Phantom Menace</option>
                </select>
            </div>
        )
    }
}