import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import globalSurveyImg from './../assets/images/globalSurveyImg.jpg';
import { Link } from 'react-router-dom';
   

const useStyles = makeStyles(theme => ({
  card: {
    // minHeight: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    backgroundColor: "lightBlue",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(1.5, 1.25, 1),
    color: theme.palette.openTitle,
  },
  media: {
    margin: 'auto',
    height: 300,
    maxWidth: '80%',
  },
  paraContent: {
    maxWidth: '50%', 
    margin: 'auto',  
  }
}));

export default function Home(){ 
const classes = useStyles()
return (
<Card className={classes.card}>
   
  <Typography variant="h3" className={classes.title}>Welcome to Global Survey Solutions</Typography>


<CardMedia className={classes.media}
image={globalSurveyImg} title="Global Survey Solutions"/>
<CardContent>
<Typography className={classes.paraContent} component="p"> 
 Established few years ago, Global Survey Solutions have been delivering high quality 
 of market research services and solutions. At Global Survey Solutions, We appreciate 
 opinion of every single member and provide them with  variety of reward programs. 
 We keep in close touch with them and always listen to their feedback. We are proud 
 to serve our customer with unmatched services.
</Typography> 
</CardContent>
</Card> 
)
}