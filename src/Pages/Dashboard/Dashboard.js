import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import { Button } from '@mui/material';
import Payment from '../Payment/Payment';
import MyOrder from './MyOrder/MyOrder';
import Review from '../Home/Review/Review';

const drawerWidth = 240;
function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ textAlign: 'center' }}> Welcome <br /> {user.displayName.toUpperCase()}</Toolbar>
            <Divider />
            <List>
                <NavLink to={`${url}`} activeClassName={{ color: 'green' }} style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button>
                        Dashboard
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to={`${url}/orders`} style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button>
                        My Orders
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to={`${url}/review`} style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button>
                        Add Review
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to={`${url}/payment`} style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button>
                        Payment
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to={`${url}/makeAdmin`} style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button>
                        Make Admin
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to={`${url}/addProduct`} style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button>
                        Add Product
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/home" style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button>
                        Home
                    </ListItem>
                </NavLink>

            </List>
            {/* <Link to=><Button color="inherit">Dashboard</Button></Link> */}
            {/* <Link ><Button color="inherit">Make Admin</Button></Link> */}
            {/* <Link ><Button color="inherit">Add Doctor</Button></Link> */}
            {/* {admin && <Box>

            </Box>} */}
            <List>
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        
                    </ListItem>
                ))} */}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/orders`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}


Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
