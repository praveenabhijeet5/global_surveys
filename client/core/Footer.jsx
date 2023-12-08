import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Copyright from '@material-ui/icons/Copyright'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import globalSurveyImg from './../assets/images/globalSolution_2.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    mainLayout: {
      display: 'flex',
      justifyContent:'center',
      maxWidth: '100%',
    //   backgroundColor: "lightBlue",
      padding: 30,
    },
    itemSpacing: {
      paddingRight: 30,  
    }
  }));

export default function Footer() {
    const classes = useStyles()

    return (
        <div className={classes.mainLayout}>
            <div className={classes.itemSpacing}>
                Copyright © 2023, Global Services.
            </div> 
            <div className={classes.itemSpacing}>
                Registered: Global Surveys®
            </div>
            <div>
                Contact us: 
                <div>
                    Toll-free:
                    <Link to="tel:1-999-999-9999">
                        1-555-555-5555
                    </Link>
                </div>
                <div>
                    e-mail 
                    <Link to="mailto:global@abc.com">
                    : global@abc.com
                    </Link>
                </div>
            </div>
        </div>
    );
};