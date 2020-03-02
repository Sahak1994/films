import React, { Component } from 'react';

import './filter-gender.css';

export default class FilterGender extends Component {

    state = {

    }

    render() {

        return (
            <div className="filter-gender form-group">
                <select className="form-control"
                        id="exampleFormControlSelect2">
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
                </select>
            </div>
        )
    }
}