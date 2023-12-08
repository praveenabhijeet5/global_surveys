/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/


import React from 'react'
import { useState } from 'react'
import './main.css'
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
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  card: {
    // Define your card styles here
    maxWidth: 600,
    maxHeight: 500,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    borderRadius: 30,
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
    padding: 10,
    margin: 30,
    marginLeft: 20,
    backgroundColor: "lightpink",
    borderRadius: 30,
    color: 'red',
    fontSize: 25,
  },
  root: {
      // Define your root styles here
    margin: theme.spacing(10),
    // marginTop: theme.spacing(10),
    backgroundColor: "lightBlue",
    },
}));



let params = new URLSearchParams(location.search);
console.log("searching for params: " + params.get('surveyId'));
let fetchedSurveyID = params.get('surveyId');
let fetchFromLink = 'http://localhost:3000/api/surveys/' + fetchedSurveyID 
let survey = {};
try {
  const response = await fetch(fetchFromLink, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();

  console.log("data: " + data.name);
  console.log("data: " + JSON.stringify(data));

  survey = {
    User: data.user,
    name: data.name,
    questions: data.questions,
  }
  console.log("survey: " + survey)
  console.log(survey.questions)
} catch (error) {
  console.error('Error:', error);
}

function Answer() {
  const [answers, setAnswers] = useState(survey.questions)  

  const setCorrectAnswer = (index, event, value) => { //sets selected radio button and updates {answers}
    let q = [...answers]; 
    q[index].Answer = value; //for each question, grab radio button and assign the value to the "Answer" field
    console.log("q: " + q[index].Answer)
    setAnswers(q);
  }

  const setAgreeDisagree = (index, event, value) => { //sets selected radio button and updates {answers}
    let q = [...answers]; 
    q[index][event.target.id] = value; //for each question, grab radio button and assign the value to the Answer field
    console.log("radio: " + value);
    setAnswers(q);
  }

  const updateForm = (index, event) => {
    const name = event.target.name;
    const value = event.target.value;
    let q = [...answers];
    q[index][name] = value;
    setAnswers(q)
    console.log(q)   
  }

  const submitAnswers = (event) => {//performs form validation
    event.preventDefault;
    console.log("answers: " + answers)
    //because answers is already completed, all we need is to do is set the selected option for the radio buttons
    for (let index = 0; index < answers.length; index++) { //for each option, check if an answer has been selected. If not, send error message.
      let q = answers[index];
      let i = index + 1;
      console.log("CHECKING: q: " + index + ", t: " + q.type)
      console.log(q.questionText)
      if (q.Answer == "")
      {
        alert("You have not answered question #" + i + " of type: " + q.type + ". Please answer before continuing. Question: " + q.questionText) //alert the user to unanswered questions
        return;
      }
    }
    let submittedSurvey = {
      name: survey.name,
      questions: answers,
      status: "submitted"
    }
    alert(JSON.stringify(submittedSurvey, null, 1)) //replace with json saving code
  }

  const classes = useStyles()

  return (

    <Card className={classes.card}>
    <div>
      <div className={classes.title}>
          <RouterLink to="/mcanswer">
            <h3>Answer a Multiple-Choice survey</h3>
          </RouterLink>
      </div>
      <div className={classes.title}>
          <RouterLink to="/shortanswer">
            <h3>Answer a Short-Answer survey</h3>
          </RouterLink>
      </div>
      <div className={classes.title}>
          <RouterLink to="/ad_answer">
            <h3>Answer an Agree-Disagree survey</h3>
          </RouterLink>
      </div>
    </div>
    </Card>

    ////////////////////////////////////////////////////////////////
//     <div  className='Answer'>
//       <form>
//         <h1>
//           {fetchedSurveyID}
//         </h1>
//         <hr />
//         {console.log(" s : " + survey)}
//         {console.log(" q : " + survey.questions)}
//         {console.log(survey)}
//         {console.log(survey.questions)}
//         {survey.questions.map((question, index) => {
          
//           switch (question.type) {
//             case "mcq":
// //              console.log(index + " mcq")
//               // code for answering mcq questions
//               return ( //iterates over the json array and returns the form elements
//                 <div key={index}>
//                 <h3>Question {index + 1}</h3> <hr /> <label name="questionText">{question.questionText}</label> <br /> {/*Label for holding the survey question*/}
//                   {/*radio buttons share the same name, and are separated from other questions' radio buttons by using the index*/}
//                   <div className='radioDiv'>
//                     <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option1"} onChange={event => setCorrectAnswer(index, event, question.Answer1)}/>
//                     <label htmlFor={index + "Option1"} name="Option1" >{question.Answer1}</label> <br />
//                     <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option2"} onChange={event => setCorrectAnswer(index, event, question.Answer2)}/>
//                     <label htmlFor={index + "Option2"} name="Option2" >{question.Answer2}</label> <br />
//                     <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option3"} onChange={event => setCorrectAnswer(index, event, question.Answer3)}/>
//                     <label htmlFor={index + "Option3"} name="Option3" >{question.Answer3}</label> <br />
//                     <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option4"} onChange={event => setCorrectAnswer(index, event, question.Answer4)}/>
//                     <label htmlFor={index + "Option4"} name="Option4" >{question.Answer4}</label>
//                   </div>
//                   <hr />
//                 </div>)
//               break;

//             case "short":
//   //            console.log(index + "short")
//               return ( //iterates over the json array and returns the form elements
//               <div key={index}>
//               <h3>Question {index + 1}</h3> 
//               <hr /> 
//               <label name="questionText">{question.questionText}</label> <br /> {/*Label for holding the survey question*/}
//                 {/*user's question answer is entered below*/}
//                 <input name='Answer' placeholder='Enter answer text here...' onChange={event => updateForm(index, event)} required/>
//                 <hr />
//               </div>)
//               break;

//             case "adq":
//     //          console.log(index + "adq")
              
//               return ( //iterates over the json array and returns the form elements
//                 <div key={index}>
//                 <h3>Question {index + 1}</h3> 
//                 <hr /> 
//                 <label name="questionText"><h4>{question.questionText}</h4></label> <br /> {/*Label for holding the survey question*/}
//                   {/*radio buttons share the same name, and are separated from other questions' radio buttons by using the index*/}
//                   <div className='inline'>
//                         <label className='disagreeLabel'>Disagree</label>
//                         <input type="radio" name={'Option ' + index} id='Answer' className='StronglyDisagree'onChange={event => setAgreeDisagree(index, event, 'Strongly Disagree')}/>
//                         <input type="radio" name={'Option ' + index} id='Answer' className='Disagree' onChange={event => setAgreeDisagree(index, event, 'Disagree')}/>
//                         <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatDisagree'onChange={event => setAgreeDisagree(index, event, 'Somewhat Disagree')}/>
//                         <input type="radio" name={'Option ' + index} id='Answer' className='Neutral'onChange={event => setAgreeDisagree(index, event, 'Neutral')}/> 
//                         <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatAgree'onChange={event => setAgreeDisagree(index, event, 'Somewhat Agree')}/>
//                         <input type="radio" name={'Option ' + index} id='Answer' className='Agree'onChange={event => setAgreeDisagree(index, event, 'Agree')}/> 
//                         <input type="radio" name={'Option ' + index} id='Answer' className='StronglyAgree'onChange={event => setAgreeDisagree(index, event, 'Strongly Agree')}/> 
//                         <label className='agreeLabel'>Agree</label>
//                         </div>  
//                   <hr />
//                 </div>
//                 )

//               break;
          
//             default:
//               console.log(index + "none")

//               return (<><h1>This means the type attribute of this question has not been added, or the value is invalid.</h1> <hr /></>)
              
//               break;
//           }  
          
//         })}
//         <input type="button" value="Submit" onClick={submitAnswers}/>
//       </form>
//     </div>
  );
}

export default Answer
