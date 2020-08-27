import React, { Component } from 'react'
import Planedex from './Planedex'

import jupiterImage from './img/012-jupiter.svg'
import marsImage from './img/017-mars.svg'
import mercuryImage from './img/018-mercury.svg'
import earthImage from './img/006-planet-earth.svg'
import neptuneImage from './img/022-neptune.svg'
import saturnImage from './img/028-saturn.svg'
import uranusImage from './img/035-uranus.svg'
import venusImage from './img/036-venus.svg'
import plutoImage from './img/011-planet.svg'

class Planegame extends Component {
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
        let item = this.props.planet[Math.floor(Math.random() * this.props.planet.length)]
        console.log("item", item)


        let hand1 = []
        let hand2 = [...this.props.planet]
        while(hand1.length < hand2.length){
            let randomIndex = Math.floor(Math.random() * hand2.length)
            let randomPlanet = hand2.splice(randomIndex, 1)[0]
            hand1.push(randomPlanet)
        }
        let randPlan1 = hand1[0]
        let randPlan2 = hand2[0]
        console.log("hand1", hand1)
        console.log("hand2", hand2)
        console.log("randPlan1", randPlan1)
        console.log("randPlan2", randPlan2)
        return (
            <div>
                <h1>Planegame!</h1>
                <Planedex planet={hand1[0][0]} />
                <Planedex planet={hand2} />
            </div>
        )

    }
}

export default Planegame