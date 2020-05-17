import React, { Component } from 'react';
import Typist from 'react-typist';
import './index.css'

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <Typist startDelay={1000} avgtypingdelay={150}  className="header">
                    <span>Hi! </span>
                    <br/ >
                    <span>
                        I am Prashil
                    </span>
                </Typist>
            </div>

        );
    }
}
export default Hero;