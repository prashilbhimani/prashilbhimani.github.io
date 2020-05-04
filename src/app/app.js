import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Header from '../components/Header';


class App extends Component {
    render() {
            const App = () => (
                    <div >
             <Header/>
            <Switch>
                    <Route path="/projects" component={Projects} />
                    <Route path="/" component={Home} />
                </Switch> <
            /div>
        );
        return (
            <Switch>
                <App />
            </Switch>
        );
    }
}

export default App;