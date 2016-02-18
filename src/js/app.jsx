import React from "react";
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// components
import Header from './header.jsx';
import Footer from './footer.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Install from './install.jsx';
import Docs from './docs.jsx';

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
