import React from "react";

import { Link } from 'react-router';

require('../css/lead.css');

class Lead extends React.Component {

    render() {
        return <div className="jumbotron">
            <div className="container">
                <h1>Simply</h1>
                <p>Simple front-end project</p>
                <Link to="/docs" className="btn btn-reverse">Read the docs</Link>
            </div>
        </div>
    }

}

export default Lead;
