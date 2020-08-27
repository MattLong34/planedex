import React, { Component } from 'react'
import Planecard from './Planecard'
import './Planedex.css'

class Planedex extends Component{
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
            <div className="Planedex">
                <h1>Planedex!</h1>
                <div className="Planedex-cards">
                    {this.props.planet.map((planet) => (
                        <Planecard id={planet.id} name={planet.name} type={planet.type} />
                    ))}
                </div>
        </div>
        )
    }
}

export default Planedex