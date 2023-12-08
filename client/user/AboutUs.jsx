import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import globalSurveyImg from './../assets/images/globalSolution_2.jpg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    card: {
      minHeight: 500,
      margin: 'auto',
      marginTop: theme.spacing(10),
      backgroundColor: "lightBlue",
    },
    topTitle: {
      textAlign: "center",
      padding: theme.spacing(1.5, 1.25, 1),
      color: theme.palette.openTitle,      
    },
    title: {
      textAlign: "center",
      padding: theme.spacing(1.5, 1.25, 1),
      color: theme.palette.openTitle,
    },
    media: {
      margin: 'auto',
      height: 300,
      width: 500,
      borderRadius: 20,
    },
    paraContent: {
      maxWidth: '70%', 
      margin: 'auto',  
    },
    widthShare: {
      maxWidth: '47%',
    },
    cardFlex: {
      display: 'flex',
      justifyContent:'center',
      maxWidth: '100%',
      backgroundColor: "lightBlue",
    }
  }));

export default function AboutUs() { 
    const classes = useStyles()

    return (

      <div>
        <div>
          <Card className={classes.title}>   
            <Typography variant="h3" className={classes.title}>Global Survey Solutions</Typography> 
          </Card> 
        </div>
        <div className={classes.cardFlex}>
          <div className={classes.widthShare}>
            <Card className={classes.card}>   
              <CardMedia className={classes.media}
              image={globalSurveyImg} title="Global Survey Solutions"/>
            </Card> 
          </div>

          <div className={classes.widthShare}>
          <Card className={classes.card}>           
            <Typography variant="h4" className={classes.title}>Who we are</Typography>
            <Typography className={classes.paraContent} component="p"> 
                Established few years ago, Global Survey Solutions have been delivering high quality 
                of market research services and solutions. At Global Survey Solutions, We appreciate 
                opinion of every single member and provide them with  variety of reward programs. 
                We keep in close touch with them and always listen to their feedback. We are proud 
                to serve our customer with unmatched services.
            </Typography> 
          </Card>
          </div>
        </div> 
      </div>
        )
    }