import React, {Component} from 'react'
// import React from 'react';
import './Planecard.css'

class Planecard extends Component {
    
    render(){
        return (
            <div className="Planecard">
                <h1 className="Planecard-title">{this.props.name}</h1>
                <div>
                    <img src={this.props.image} alt={this.props.name} />
                    <p className="Planecard-data">Planet Type: {this.props.type}</p>
                    <p className="Planecard-data">Miles from Earth: {this.props.distance}</p>
                </div>
            </div>
        )
    }
}

export default Planecard
