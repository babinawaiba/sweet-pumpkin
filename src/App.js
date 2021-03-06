import React, { Component } from 'react';
import 'typeface-roboto';
import Switch from '@material-ui/core/Switch';
import './App.css';
import Header, { Logo } from './Header.js';
import Card from './Card.js';
import PhotoFrame from './PhotoFrame.js';
import Modal from './Modal.js';
import Menu from './Menu.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySidebar: true,
            switchOn: false,

        };
        this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    }
    handleToggleSidebar() {
        this.setState({ displaySidebar: !this.state.displaySidebar });
    }
    handleSwitchClick = () => {
        this.setState({ switchOn: !this.state.switchOn });
    }
    render() {
        let sidebarClass = "sidebar";
        const profile = {
            email: "babina.waiba@gmail.com",
            name: "Alvina Tamang",
            address: "451 Taralake State Drive NE",

        };
        console.log('States:', this.state);

        return (
            <div className="container">
                <Menu />
                <Header toggleSidebar={this.handleToggleSidebar} name="Babina Waiba" age="32" />
                <div className="main-content-wrapper">
                    <Modal />
                    {this.state.displaySidebar &&
                        <div className={sidebarClass}>Sidebar</div>

                    }

                    <div className="main-content">
                        <Switch
                            checked={this.state.switchOn}
                            onClick={this.handleSwitchClick}
                        />
                        {this.state.switchOn &&
                            <div>
                                <Card profile={profile} />
                                <Logo src="./user-circle-solid.svg" />
                            </div>
                        }
                    </div>
                </div>
                <div className="footer">Footer</div>
                <PhotoFrame />


            </div>
        );
    }
}

export default App;
