import React,{ Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class SideNav extends Component {

    constructor(props) {
        super(props); 
    }
 

    render() {
        return (
            <div>
                <Drawer 
                    docked={false} 
                    open={this.props.open}
                    onRequestChange={this.props.toggleOpen}
                     >
                    <AppBar
                        title={this.props.title}
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        onLeftIconButtonTouchTap={this.props.toggleOpen}
                    />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}
