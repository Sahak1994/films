import React, { Component } from 'react';

import './film-page.css';

export default class FilmPage extends Component {

    render() {

        return (
            <div className="film-page">
                <h6>A New Hope</h6>
                <p>
                    It is a period of civil war. Rebel spaceships,
                    striking from a hidden base, have won their first
                    victory against the evil Galactic Empire. During the
                    battle, Rebel spies managed to steal secret plans to
                    the Empire's ultimate weapon, the DEATH STAR, an
                    armored space station with enough power to destroy 
                    an entire planet. Pursued by the Empire's sinister
                    agents, Princess Leia races home aboard her starship,
                    custodian of the stolen plans that can save her people
                    and restore freedom to the galaxy....
                </p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className="term">First</th>
                            <th scope="col" className="term">Last</th>
                            <th scope="col" className="term">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}