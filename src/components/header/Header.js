import React,{ Component } from 'react';
import Drawer from 'material-ui/Drawer';  
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'; 
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: true,            
        }
    }

    handleChange(event, logged) {
        this.setState({ logged: logged });
       
    };





    render() {
        return (
            <div>
                    <AppBar title={this.props.title}
                        onLeftIconButtonTouchTap={ this.props.onLeftIconClick}                     
                        iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    />
            </div>
        );
    }
}



const Login = (props)=>(
            <FlatButton {...this.props} label="Login" />
)
Login.muiName = 'FlatButton';    



const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';