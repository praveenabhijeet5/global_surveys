// Latest

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from '../lib/auth-helper'
import logo from '../assets/images/logo.jpg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  navBarSpacing: {
    // height: 20,
    margin: theme.spacing(10),
  },
  media: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 20,
  },
}));

const isActive = (location, path) => {
  return location.pathname === path ? { color: '#8a134b' } : { color: '#ffffff' };
};

export default function Menu(){ 
  const classes = useStyles()
  const navigate = useNavigate();
  const location = useLocation();

  return (
  <div>
    <AppBar position="fixed">
      <Toolbar>
      <Avatar alt="logo" src={logo} className={classes.media}/>
      {/* <img 
        src={logo}
        width="50"
        height="50"
      /> */}
        <Typography variant="h5" color="inherit">
          Global Survey Solutions
        </Typography>
        <div>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(location, "/")}>
            <HomeIcon/>
          </IconButton>
        </Link>
              
        <Link to="/users">
          <Button style={isActive(location, "/users")}>Users</Button>
        </Link>
        {
          !auth.isAuthenticated()
        }
        {
          !auth.isAuthenticated() && (<span>
            <Link to="/signup">
              <Button style={isActive(location, "/signup")}>Sign-up
              </Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(location, "/signin")}>Sign-In
              </Button>
            </Link>
          </span>)
        }

        </div>
        {
          auth.isAuthenticated() && (<span>
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button style={isActive(location, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
            </Link>
            <Link to="/create">
              <Button style={isActive(location, "/create")}>Create</Button>
            </Link>
            <Link to="/answer">
              <Button style={isActive(location, "/answer")}>Answer</Button>
            </Link>
            <Link to="/surveys">
              <Button style={isActive(location, "/surveys")}>Questionnaires</Button>
            </Link>
            <Link to="/activesurvey">
              <Button style={isActive(location, "/activesurvey")}>Active-Surveys</Button>
            </Link>
            <Button color="inherit" onClick={() => {
                auth.clearJWT(() => navigate('/'));
              }}>Sign out</Button>
          </span>)
        }
        <Link to="/aboutus">
          <Button style={isActive(location, "/aboutus")}>About-Us</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <div className={classes.navBarSpacing}>
        {/* files requiered (modified) */}
          {/* 1- MainRouter 
          2- Home.jsx       
          3- theme.jsx
          4- User.jsx
          5- Signup.jsx
          6- Signin.jsx
          7- Profile.jsx
          8- surveys.jsx 
          9- AboutUs.jsx  
          10- Client/assets/images (folder: all images) 
          11- Client/index.html
          12- Footer.jsx*/}
        {/* files requiered */}
    </div>
  </div>
);
};


