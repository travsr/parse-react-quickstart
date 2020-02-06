import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router';

// Views
import SampleView1 from './Views/SampleView1';
import SampleView2 from './Views/SampleView2';


class WebApp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        };
        
    }

    componentDidMount() {

    }

    render() {

        return(
            <div className="cover-parent text-center" style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>
                <div className="cover-container d-flex w-100 p-3 mx-auto">
                    <main role="main" className="inner cover">
                        <h1 className="cover-heading">Hello, world.</h1>
                        <p className="lead">The server is now running.</p>
                        <p className="lead">
                            <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                        </p>
                        <nav className="navbar navbar-dark bg-dark">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </nav>
                    </main>
                    
                </div>
                <BrowserRouter basename="/">
                        <Switch>
                            <Route exact path="/view1" component={SampleView1} />
                            <Route exact path="/view2" component={SampleView2} />
                        </Switch>
                    </BrowserRouter>
            </div>
        );
    }
}

export default WebApp;