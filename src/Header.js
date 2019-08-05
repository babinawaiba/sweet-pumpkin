import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        console.log('This is props of Header:', this.props);
        return (
            <div className="header">
                <span className="sidebar-toggle">
                    <img
                        src="./bars-solid.svg"
                        alt="toggle sidebar"
                        onClick={this.props.toggleSidebar}
                    />
                </span>
                <Logo src="./user-circle-solid.svg" />
            </div>
        );

    }
}

export default Header;

export const Logo = (props) => (
    <div className="logo"></div>
);