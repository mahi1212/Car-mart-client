import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';


const Header = () => {
    const { user, logout } = useAuth()
    const theme = useTheme()
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        mobLink : {
            color: '#000',
            fontWeight: 700
        }
    })
    const { navIcon, navItemContainer, mobLink } = useStyle()
    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <NavLink className={mobLink} style={{ textDecoration: 'none' }} to='/explore'>Explore</NavLink>
                </ListItem>
                <Divider />
                {user.displayName ?
                    <ListItem button >
                        <NavLink className={mobLink} style={{ textDecoration: 'none' }} to='/dashboard'>Dashboard</NavLink>
                    </ListItem>
                    :
                    <ListItem button >
                        <NavLink className={mobLink} style={{ textDecoration: 'none' }} to='/login'>Login</NavLink>
                    </ListItem>
                }
                <Divider />
                {
                    user?.email && <Button onClick={logout} style={{ textDecoration: 'none' }} color="inherit">Logout</Button>
                }
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar style={{ background: '#142F43', padding: '7px 2rem' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Car Mart
                        </Typography>
                        <Box className={navItemContainer}>
                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/explore'><Button color="inherit">Explore</Button></NavLink>
                            {user?.email ?
                                <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/dashboard'>
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>

                                : <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/login'>
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                            }
                            {
                                user?.email && <Button onClick={logout} style={{ textDecoration: 'none' }} color="inherit">Logout</Button>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <SwipeableDrawer
                        open={state}
                        onClose={() => setState(false)}
                        onOpen={() => setState(true)}
                    >
                        {list}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Header;