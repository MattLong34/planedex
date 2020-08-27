import React, { Component } from 'react'
import Planecard from './Planecard'
import './Planedex.css'

import jupiterImage from './img/012-jupiter.svg'
import marsImage from './img/017-mars.svg'
import mercuryImage from './img/018-mercury.svg'
import earthImage from './img/006-planet-earth.svg'
import neptuneImage from './img/022-neptune.svg'
import saturnImage from './img/028-saturn.svg'
import uranusImage from './img/035-uranus.svg'
import venusImage from './img/036-venus.svg'
import plutoImage from './img/011-planet.svg'

class Planedex extends Component{
    static defaultProps = {
        planet: [
            {id: 1, name: 'Mercury', type: 'terrestrial', image: mercuryImage},
            {id: 2, name: 'Venus', type: 'terrestrial', image: venusImage},
            {id: 3, name: 'Earth', type: 'terrestrial', image: earthImage},
            {id: 4, name: 'Mars', type: 'terrestrial', image: marsImage},
            {id: 5, name: 'Jupiter', type: 'jovial', image: jupiterImage},
            {id: 6, name: 'Saturn', type: 'jovial', image: saturnImage},
            {id: 7, name: 'Uranus', type: 'jovial', image: uranusImage},
            {id: 8, name: 'Neptune', type: 'jovial', image: neptuneImage},
            {id: 9, name: 'Pluto', type: 'dwarf', image: plutoImage},
        ]
    }
    render(){
        return (
            <div className="Planedex">
                <h1>Planedex!</h1>
                <div className="Planedex-cards">
                    {this.props.planet.map((planet) => (
                        <Planecard id={planet.id} name={planet.name} type={planet.type} image={planet.image} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Planedex