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
            {id: 1, name: 'Mercury', type: 'Terrestrial', image: mercuryImage, distance: "126 million"},
            {id: 2, name: 'Venus', type: 'Terrestrial', image: venusImage, distance: "76 million"},
            {id: 3, name: 'Earth', type: 'Terrestrial', image: earthImage, distance: "0"},
            {id: 4, name: 'Mars', type: 'Terrestrial', image: marsImage, distance: "48 million"},
            {id: 5, name: 'Jupiter', type: 'Jovial', image: jupiterImage, distance: "409 million"},
            {id: 6, name: 'Saturn', type: 'Jovial', image: saturnImage, distance: "855 million"},
            {id: 7, name: 'Uranus', type: 'Jovial', image: uranusImage, distance: "1799 million"},
            {id: 8, name: 'Neptune', type: 'Jovial', image: neptuneImage, distance: "2691 million"},
            {id: 9, name: 'Pluto', type: 'Dwarf', image: plutoImage, distance: "3500 million"},
        ]
    }
    render(){
        return (
            <div className="Planedex">
                <h1>Planets in the Solar System</h1>
                <div className="Planedex-cards">
                    {this.props.planet.map((planet) => (
                        <Planecard id={planet.id} name={planet.name} type={planet.type} image={planet.image} distance={planet.distance} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Planedex