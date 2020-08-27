import React, {Component} from 'react'
// import React from 'react';
import jupiter from './img/012-jupiter.svg'
import './Planecard.css'

class Planecard extends Component {
    render(){
        return (
            <div className="Planecard">
                <h1 className="Planecard-title">{this.props.name}</h1>
                <img src={jupiter} alt={this.props.name} />
                <p className="Planecard-data">A {this.props.type} planet</p>
            </div>
        )
    }
}

export default Planecard
