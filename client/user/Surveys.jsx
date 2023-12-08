// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import globalSurveyImg from './../assets/images/globalSurveyImg.jpg';
// import { Link } from 'react-router-dom';


// const useStyles = makeStyles(theme => ({
//     card: {
//       minHeight: 600,
//       margin: 'auto',
//       marginTop: theme.spacing(10),
//       backgroundColor: "lightBlue",
//     },
//     title: {
//       textAlign: "center",
//       padding: theme.spacing(1.5, 1.25, 1),
//       color: theme.palette.openTitle,
//     }
//   }));

// export default function Questionnaire() { 
//     const classes = useStyles()
//     return (
//         <Card className={classes.card}>
           
//           <Typography variant="h5" className={classes.title}>Welcome to our survey questions.</Typography>
        
//         </Card> 
//         )
//     }



import React from 'react'
import {useState} from 'react'


import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import {list} from './api-surveys.js'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
//import Person from '@material-ui/core/Person'
//import ArrowForward from '@material-ui/core/ArrowForward'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
//import ArrowForward from '@material-ui/core/ArrowForward'
// import ArrowForward from '@material-ui/icons/ArrowForward';
import logo from '../assets/images/logo.jpg';

const useStyles = makeStyles(theme => ({
    card: {
      // Define your card styles here
    },
    textField: {
      // Define your text field styles here
      color: 'red',
    },
    error: {
      // Define your error icon styles here
    },
    submit: {
      // Define your submit button styles here
    },
    title: {
      // Define your title styles here
      textAlign: "center",
      paddingTop: 10,
      marginLeft: 20,
      color: 'red',
    },
    root: {
        // Define your root styles here
      margin: theme.spacing(10),
      // marginTop: theme.spacing(10),
      backgroundColor: "lightBlue",
      },
  }));

export default function Surveys() {
    const [surveys, setSurveys] = useState([])
useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    list(signal).then((data) => {
if (data && data.error) { 
console.log(data.error)
} else { 
    console.log(data)
setSurveys(data)
} 
})
return function cleanup(){ 
abortController.abort()
} 
}, [])

  
    const classes = useStyles()
    
return (
<Paper className={classes.root} elevation={4}>  
<Typography variant="h4" className={classes.title}> 
Survey Questions and Answers
</Typography> 
<div className={classes.title}>
    <RouterLink to="/createquestions">
      <h3>Add Questions and answers</h3>
    </RouterLink>
</div>
<List dense>
{surveys.map((item, i) => {
    return  <Link >
       {/* return  <Link component={RouterLink} to={"/surveys/" + item._id} key={i}>  */}
    
<ListItem button> 
{/* <ListItemAvatar>
<Avatar> 

</Avatar>
</ListItemAvatar> */}
<ListItemText className={classes.textField} primary={item.question} secondary={item.answer} /> 
<ListItemSecondaryAction>
<IconButton>
{/* <ArrowForward/>  */}
</IconButton>
</ListItemSecondaryAction> 
</ListItem>
</Link> 
})} 
</List>
</Paper>
)
}


