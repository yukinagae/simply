import React from "react";

require('../css/header.css');

class Header extends React.Component {

    render() {
        return <header className="masthead">
            <div className="container">
                <a href="/" className="masthead-logo">
                    <i className="masthead-logo-icon fa fa-code"> Simply</i>
                </a>
                <nav className="masthead-nav">
                    <a href="/about">About</a>
                    <a href="/install">Install</a>
                    <a href="/docs">Docs</a>
                    <a href="https://github.com/yukinagae/simply" target="_blank">Github</a>
                </nav>
            </div>
        </header>
    }

}

export default Header;
