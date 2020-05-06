import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import MassHike from "./components/projects/MassHike";
import Contuity from "./components/projects/Contuity";
import BevSpot from "./components/projects/BevSpot";
import Agnes from "./components/projects/Agnes";
import DPT from "./components/projects/DPT";
import OnlineResources from "./components/projects/OnlineResources";


const Routes = props => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Home/>}/>
                    <Route exact path="/about" render={() => <About/>}/>
                    <Route exact path="/projects" render={() => <Projects/>}/>
                    <Route exact path="/projects/mass-hike" render={() => <MassHike/>}/>
                    <Route exact path="/projects/contuity" render={() => <Contuity/>}/>
                    <Route exact path="/projects/bevspot" render={() => <BevSpot/>}/>
                    <Route exact path="/projects/agnes" render={() => <Agnes/>}/>
                    <Route exact path="/projects/dpt" render={() => <DPT/>}/>
                    <Route exact path="/projects/online-resources" render={() => <OnlineResources/>}/>
                </Switch>
            </Router>
    );
};

export default Routes;