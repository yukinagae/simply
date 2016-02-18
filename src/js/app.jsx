import React from "react";
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Header from './header.jsx';
import Footer from './footer.jsx';
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

class App extends React.Component {

    render() {
        return <div>
            <Header />
            <div>
                {this.props.children}
            </div>
            <Footer />
        </div>
    }

}

class About extends React.Component {
    render() {
        return <div className="container">
            <h1>About</h1>
        </div>
    }
}

class Install extends React.Component {
    render() {
        return <div className="container">
            <h1>Install</h1>
        </div>
    }
}

class Docs extends React.Component {
    render() {
        return <div className="container">
            <h1>Docs</h1>
        </div>
    }
}

render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='about' component={About} />
            <Route path='install' component={Install} />
            <Route path='docs' component={Docs} />
        </Route>
    </Router>
), document.getElementById('app'))
