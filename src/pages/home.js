import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <h1>This is my personal website</h1>
                </div>
                <div>
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                            to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}
export default Home;