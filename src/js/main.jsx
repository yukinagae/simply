import React from "react";
import { render } from 'react-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';

class Main extends React.Component {

    render() {
        return <div>
            <Header />
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
            <Footer />
        </div>
    }

}

render(<Main/>, document.getElementById('app'));
