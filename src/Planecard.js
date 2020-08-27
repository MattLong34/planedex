import React, {Component} from 'react'
// import React from 'react';
import './Planecard.css'

import jupiterImage from './img/012-jupiter.svg'
import marsImage from './img/017-mars.svg'
import mercuryImage from './img/018-mercury.svg'
import neptuneImage from './img/022-neptune.svg'
import saturnImage from './img/028-saturn.svg'
import uranusImage from './img/035-uranus.svg'
import venusImage from './img/036-venus.svg'
import plutoImage from './img/011-planet.svg'

class Planecard extends Component {
    static defaultProps = {
        planet: [
            {id: 1, name: 'Mercury', type: 'terrestrial'},
            {id: 2, name: 'Venus', type: 'terrestrial'},
            {id: 3, name: 'Earth', type: 'terrestrial'},
            {id: 4, name: 'Mars', type: 'terrestrial'},
            {id: 5, name: 'Jupiter', type: 'jovial'},
            {id: 6, name: 'Saturn', type: 'jovial'},
            {id: 7, name: 'Uranus', type: 'jovial'},
            {id: 8, name: 'Neptune', type: 'jovial'},
            {id: 9, name: 'Pluto', type: 'dwarf'},
        ]
    }
    render(){
        return (
            <div className="Planecard">
                <h1 className="Planecard-title">{this.props.name}</h1>
                <img src={jupiterImage} alt={this.props.name} />
                <p className="Planecard-data">A {this.props.type} planet</p>
            </div>
        )
    }
}

export default Planecard
