import React, { Component } from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
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
            <BrowserRouter basename="/webapp">
                <div className="cover-parent text-center" style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>
                    <div className="cover-container w-100 p-3 mx-auto">

                            <h1 className="cover-heading">Hello, world.</h1>
                            <p className="lead">The server is now running.</p>
                        
                            <p>View the parse <a className="badge badge-primary" href="/dashboard">dashboard</a></p>
                            
                            
                
                        
                    </div>
                    <hr/>
                    <Switch>
                        <Route exact path="/view1" component={SampleView1} />
                        <Route exact path="/view2" component={SampleView2} />
                    </Switch>
            
                </div>
            </BrowserRouter>
        );
    }
}

export default WebApp;