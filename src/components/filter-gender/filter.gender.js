import React, { Component } from 'react';

import './filter-gender.css';

export default class FilterGender extends Component {

    state = {
        value: 'none',
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({value});
        this.props.filter(e.target.value)
        
    }

    render() {

        return (
            <div className="filter-gender form-group">
                <select className="form-control"
                        id="exampleFormControlSelect2"
                        value={this.state.value}
                        onChange={this.handleChange}>
                    <option value="none">
                        Select Gender(None)
                    </option>
                    <option value="male">
                        Male
                    </option>
                    <option value="female">
                        Female
                    </option>
                    <option value="n/a">
                        N/A
                    </option>
                    <option value="hermaphrodite">
                        Hermaphrodite
                    </option>
                </select>
            </div>
        )
    }
}