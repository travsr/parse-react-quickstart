import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SampleView2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        };
        
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <p>
                    <Link to="/view1" className="badge badge-primary" style={{marginRight: 10}}>View 1</Link>
                    <Link to="/view2" className="badge badge-secondary">View 2</Link>
                </p>
                <p>Sample View 1</p>
            </div>
        );
    }
}

export default SampleView2;