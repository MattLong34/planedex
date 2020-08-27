import React, {Component} from 'react'
// import React from 'react';
import jupiter from './img/012-jupiter.svg'
import './Planecard.css'

class Planecard extends Component {
    render(){
        return (
            <div className="Planecard">
                <h1>{this.props.name}</h1>
                <img src={jupiter} alt={this.props.name} />
                <h2>A {this.props.type} planet</h2>
            </div>
        )
    }
}

export default Planecard
