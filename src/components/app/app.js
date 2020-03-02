import React from 'react';

import SelectFilm from '../select-film';
import FilmPage from '../film-page';

import NewHope from '../../services';
import './app.css';


const App = () => {

    return (
        <div className="app">
            <div className="left-side">
                <SelectFilm />
            </div>
            <div className="right-side">
                <FilmPage />
            </div>
        </div>
    )
}

export default App;