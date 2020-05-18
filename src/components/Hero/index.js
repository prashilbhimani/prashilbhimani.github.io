import React, { Component } from 'react';
import Typist from 'react-typist';
import './index.css'

class Hero extends Component {
    constructor(props) {
        super(props);
        this.showLowerTyping = this.showLowerTyping.bind(this);
    }
    showLowerTyping() {
        var elem = document.getElementById('lower');
        setTimeout(() => { elem.style.display = 'block'; }, 500);

    }
    render() {
        return (
            <div className= "HeroContainer">
                <div className="Hero">
                    <div   className="header">
                        <Typist className="main" startDelay={1000} avgtypingdelay={200} onTypingDone={this.showLowerTyping} cursor={{hideWhenDone: true, hideWhenDoneDelay: 500,}}>
                            <span>Hi!</span>
                            <Typist.Backspace count={3} delay={1000} />
                            <Typist.Delay ms={500} />
                            <span>I am Prashil</span>
                            <br/>
                        </Typist>
                        <div id="lower">
                        <Typist className="sub-bullet" startDelay={4700} avgtypingdelay={200}>
                            <Typist.Delay ms={700} />
                            <span>* Full Stack Developer</span>
                            <Typist.Delay ms={700} />
                            <br/>
                            <span>* Data Engineer</span>
                            <Typist.Delay ms={700} />
                            <br/>
                            <span>* Data Analyst</span> 
                        </Typist>          
                        </div>    
                    </div>
                </div>
                <div className="arrowContainer">
                    <a className= "arrow" href="#timeline">
                        Learn More
                        <svg fill="#fff" stroke-width="3" viewBox="0 0 500 500" height="3em" xmlns="http://www.w3.org/2000/svg"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                    </a>
                </div> 
            </div>

        );
    }
}
export default Hero;