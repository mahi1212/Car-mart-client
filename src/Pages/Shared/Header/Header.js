import React, { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// Resposive header
const styleSheet = {
    list: {
        width: 300,
    },
    padding: {
        paddingRight: 30,
        cursor: "pointer",
    },

    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    }
}

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }
    
    // Mobile Screens view
    createDrawer() {
        
        return (
            <div>
                <AppBar >
                    <Toolbar style={{ background: '#142F43' }}>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => { this.setState({ drawer: true }) }} />

                            <Typography color="inherit" variant="h5">Car Mart</Typography>
                            <Typography color="inherit" variant="headline"> </Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={() => { this.setState({ drawer: false }) }}
                    onOpen={() => { this.setState({ drawer: true }) }}>

                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.setState({ drawer: false }) }}
                        onKeyDown={() => { this.setState({ drawer: false }) }}>

                        <List className={this.props.classes.list}>
                            <ListItem key={1} button divider>
                                <NavLink to="/explore" style={{ textDecoration: 'none', color: '#fff', padding:'5px 10px'}}>Explore</NavLink>
                            </ListItem>
                            <ListItem key={2} button divider>
                                <NavLink to="/dashboard" style={{ textDecoration: 'none', color: '#fff', padding:'5px 10px'}}>Dashboard</NavLink>
                            </ListItem>
                            {

                            }
                            <ListItem key={3} button divider>
                                <NavLink to="/login" style={{ textDecoration: 'none', color: '#fff', padding:'5px 10px'}}>Login</NavLink>
                            </ListItem>

                        </List>
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }

    //Laptop Screens
    destroyDrawer() {
        const { classes } = this.props
        return (
            <AppBar>
                <Toolbar style={{ background: '#142F43', padding: '7px 50px' }}>
                    <Typography variant="h5" style={{ flexGrow: 1, }} color="inherit" >Car Mart</Typography>
                    <Typography style={{ fontSize: '18px', marginRight: '10px' }} className={classes.padding} color="inherit" >
                        <NavLink to="/explore" style={{ textDecoration: 'none', color: '#fff', padding:'5px 10px'}}>Explore</NavLink>
                    </Typography>
                    <Typography style={{ fontSize: '18px', marginRight: '10px' }} className={classes.padding} color="inherit" >
                        <NavLink to="/dashboard" style={{ textDecoration: 'none', color: '#fff', padding:'5px 10px'}}>Dashboard</NavLink>
                    </Typography>
                    <Typography style={{ fontSize: '18px', marginRight: '10px' }} className={classes.padding} color="inherit" >
                        <NavLink to="/login" style={{ textDecoration: 'none', color: '#fff', padding:'5px 10px'}}>Login</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Header);