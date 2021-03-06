import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlbumIcon from '@material-ui/icons/Album';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Albums from './Albums';
import AlbumSongs from './AlbumSongs';
import Inicio from './Inicio';
import Login from './Login';
import UserContext from './contexts/user';
import Admin from './Admin';
import PrivateRoute from './PrivateRoute';
import Media from './Media';
import ListPlayer from './ListPlayer';

import { connect } from 'react-redux';
import { red } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 16,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbarIco: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 2),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        height: 40,
    },
    toolbar: {
        height: 40,
    },
    title: {
        //width: '100%',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}));

function Menu({userRedux}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [user, setUser] = useState({
        signedIn: false,
        updateUser: (signedIn) => {
            setUser({ signedIn });
        }
    });


    return (
        <Router>
            <UserContext.Provider value={user}>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <div className={classes.title}>
                                <Typography variant="h6" noWrap>
                                    Reactify {userRedux.name && `de ${userRedux.name}`}
                                </Typography>
                            </div>
                            
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbarIco}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem button component={Link} to={'/'}>
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary={'Inicio'} />
                            </ListItem>
                            <ListItem button component={Link} to={'/albums'}>
                                <ListItemIcon><AlbumIcon /></ListItemIcon>
                                <ListItemText primary={'Álbums'} />
                            </ListItem>
                            <ListItem button component={Link} to={'/listplayer'}>
                                <ListItemIcon><ListAltIcon /></ListItemIcon>
                                <ListItemText primary={'Lista reproducción'} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button component={Link} to={'/login'}>
                                <ListItemIcon>{(user.signedIn) ? <LockIcon /> : <LockOpenIcon />}</ListItemIcon>
                                <ListItemText primary={'Iniciar sesión'} />
                            </ListItem>
                            <ListItem button component={Link} to={'/user'}>
                                <ListItemIcon><PersonIcon /></ListItemIcon>
                                <ListItemText primary={'Perfil de usuario'} />
                            </ListItem>
                        </List>
                        <Divider />
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Media />
                        <Route path="/" exact component={Inicio} />
                        <Route path="/albums" exact component={Albums} />
                        <Route path="/album/:id([0-9]*)" exact component={AlbumSongs} />
                        <Route path="/listplayer" exact component={ListPlayer} />
                        <Route path="/login" exact component={Login} />
                        <PrivateRoute path="/user" component={Admin} />
                    </main>
                </div>
            </UserContext.Provider>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        userRedux: state.user.user
    }
}

export default connect(
    mapStateToProps
)(Menu);