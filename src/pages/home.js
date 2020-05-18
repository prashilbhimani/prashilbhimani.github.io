import React, { Component } from 'react';
import Hero from '../components/Hero';
import EducationTimeline from '../components/EducationTimeline';

class Home extends Component {
    render() {
        return (
            <div className="Home" id="home">
                <Hero/>
                <EducationTimeline/>
            </div>
        );
    }
}
export default Home;