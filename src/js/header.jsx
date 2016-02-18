import React from "react";

import { Link } from 'react-router';

require('../css/header.css');

class Header extends React.Component {

    render() {
        return <header className="masthead">
            <div className="container">
                <a href="/" className="masthead-logo">
                    <i className="masthead-logo-icon fa fa-code"> Simply</i>
                </a>
                <nav className="masthead-nav">
                    <Link to="about" activeStyle={{ color: '#fff' }}>About</Link>
                    <Link to="install" activeStyle={{ color: '#fff' }}>Install</Link>
                    <Link to="docs" activeStyle={{ color: '#fff' }}>Docs</Link>
                    <a href="https://github.com/yukinagae/simply" target="_blank">Github</a>
                </nav>
            </div>
        </header>
    }

}

export default Header;
