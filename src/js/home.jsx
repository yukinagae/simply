import React from "react";

import Lead from './lead.jsx';

class Home extends React.Component {

    render() {
        return <div>
            <Lead />
            <div className="container">
                <div className="columns">
                    <div className="one-third column">
                        <h2>What?</h2>
                        <p>TODO what is 'Simply'?</p>
                    </div>
                    <div className="one-third column">
                        <h2>Why?</h2>
                        <p>TODO why 'Simply'?</p>
                    </div>
                    <div className="one-third column">
                        <h2>How?</h2>
                        <p>TODO how 'Simply' works?</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;
