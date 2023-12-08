/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/


import React from 'react'
import { useState } from 'react'
import './main.css'
import { toPairs } from 'lodash';

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


function Question() {
  const [questions, setQuestions] = useState([
    { 
      questionText: '',
      Answer: '',
      Answer1: '',
      Answer2: '',
      Answer3: '',
      Answer4: '',
      radio:'',
      type:''
    }])

    const updateForm = (index, event) => {
      const name = event.target.name;
      const value = event.target.value;
      let q = [...questions];
      q[index][name] = value;
      setQuestions(q);
    } 
  
    const submitForm = async (e) => {
      e.preventDefault;
      
     // console.log(questions)
     // alert(JSON.stringify(questions, null, 1))
/*    alert(localStorage.getItem("user").user != undefined)
      alert(JSON.parse(localStorage.getItem("user")).token) */
      if (JSON.parse(localStorage.getItem("user")).token){
   //   console.log("user: " + localStorage.getItem("user"))
      let survey = 
      {
        User: JSON.parse(localStorage.getItem("user")).user._id,
        name : document.getElementById("surveyName").value,
        questions : questions,
        status : 'inactive'
      }
    
  //    console.log(survey)
      if (document.querySelector("input[type='radio'][name=status]:checked")){
        if (document.querySelector("input[type='radio'][name=status]:checked").id == 'active'){
            survey.status = 'active'
        }
        else{
          survey.status = 'inactive'
        }
      }
      else{
        alert("You have not selected whether this survey should be active or inactive.")
        return
      }

      try {
        console.log("survey:  " + JSON.stringify(survey))
        console.log("posting: " + JSON.stringify(survey))
        console.log("JSON:" + JSON.stringify(survey, null, 1))

        const response = await fetch('http://localhost:3000/api/surveys/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.stringify(localStorage.getItem("user")).token
          },
          body: JSON.stringify(survey, null, 1),
        });
      } catch (error) {
        console.error('Error:', error);
      }
//      alert(JSON.stringify(survey, null, 1))
    }
    else
    {
      alert("You have no token")
    }
  }
  //question addition code:
    const addAdqQuestion = () => {
      let newQuestion = { 
        questionText: '',
        Answer: '',
        Answer1: '',
        Answer2: '',
        Answer3: '',
        Answer4: '',
        radio:'', 
        type:'adq'
      }
    let q = [...questions];
    
    if (q.length == 1 && q[0].type == '') {
/*       console.log("length: " + q.length)
      console.log("type: " +q.type) */
    setQuestions([newQuestion]);
    }
    else{
/*       console.log("length: " + q.length)
      console.log("type: " +q.type)
    console.log(q); */
    q = [...questions, newQuestion]; //appends newQuestion to the array of question objects
    setQuestions(q)
//    console.log(q)
    }
  }

    const addShortQuestion = () => {
      let newQuestion = { 
        questionText: '',
        Answer: '',
        Answer1: '',
        Answer2: '',
        Answer3: '',
        Answer4: '',
        radio:'', //radio field is added for form validation in the Answer.jsx file
        type:'short'
      }
    let q = [...questions];
    if (q.length == 1 && q[0].type == '') {
/*       console.log("length: " + q.length)
      console.log("type: " +q[0].type)
      console.log(q); */
      setQuestions([newQuestion])
    }
    else{
      q = [...questions, newQuestion]; //appends newQuestion to the array of question objects
/*       console.log("length: " + q.length)
      console.log("type: " +q.type)
      console.log(q) */
      setQuestions(q);
    }
  }
    const addMcqQuestion = () => {
      let newQuestion = { 
        questionText: '',
        Answer: '',
        Answer1: '',
        Answer2: '',
        Answer3: '',
        Answer4: '',
        radio:'', //radio field is added for form validation in the Answer.jsx file
        type:'mcq'
      }
    let q = [...questions];
    if (q.length == 1 && q[0].type == '') {
/*       console.log("length: " + q.length)
      console.log("type: " +q.type)
    console.log(q); */
    setQuestions([newQuestion])
    }
    else
    {
      q = [...questions, newQuestion]; //appends newQuestion to the array of question objects
/*       console.log(q)
      console.log("length: " + q.length)
      console.log("type: " +q.type) */
      setQuestions(q);
      }
    }

    const classes = useStyles()
  
    return (
      <Card className={classes.card}>
      <div>
        <div className={classes.title}>
            <RouterLink to="/mcquestion">
              <h3>Create a Multiple-Choice Survey</h3>
            </RouterLink>
        </div>
        <div className={classes.title}>
            <RouterLink to="/shortquestion">
              <h3>Create a Short-Answer Survey</h3>
            </RouterLink>
        </div>
        <div className={classes.title}>
            <RouterLink to="/ad_question">
              <h3>Create an Agree-Disagree Survey</h3>
            </RouterLink>
        </div>
      </div>
      </Card>
      //////////////////////////////////////////////
      // <div className='SurveyCreation'>
      //   <form>
      //     <label htmlFor="name">Survey name: </label>
      //     <input name='name' id="surveyName" placeholder='Enter survey name here...'/>
      //     <br />
      //     <label htmlFor="status" id="radioLabel">Survey Status:</label><br />
      //     <input type="radio" name="status" id="active"/> <label htmlFor="active">Active</label>
      //     <input type="radio" name="status" id="inactive"/> <label htmlFor="inactive">Inactive</label>
      //       {questions.map((question, index) => {
      //       <input type="radio" name={'Option ' + index} id='Option' onClick={event => setCorrectAnswer(index, event, '1')}/> 
      //       switch (question.type) {
      //         case "mcq":
      //           return (
      //             <div key={index} id={index + 1}>
      //               <h1>Question {index + 1}</h1><input name='questionText' placeholder='Question text goes here....' value={question.questionText} onChange={event => updateForm(index, event)}/>
      //               <br/>
      //               {/*radio inputs are here for visual purposes only*/}
      //               <input type="radio" name={'Option ' + index} id='Option' /> 
      //               {/*text inputs are used to gather the option text for each question*/}
      //               <input name='Answer1' placeholder='Enter answer text here...' value={question.Answer1} onChange={event => updateForm(index, event)}/>
      //               <br/>
      //               <input type="radio" name={'Option ' + index} id='Option'/> 
      //               <input name='Answer2' placeholder='Enter answer text here...' value={question.Answer2} onChange={event => updateForm(index, event)}/>
      //               <br/>
      //               <input type="radio" name={'Option ' + index} id='Option'/> 
      //               <input name='Answer3' placeholder='Enter answer text here...' value={question.Answer3} onChange={event => updateForm(index, event)}/>
      //               <br/>
      //               <input type="radio" name={'Option ' + index} id='Option'/> 
      //               <input name='Answer4' placeholder='Enter answer text here...' value={question.Answer4} onChange={event => updateForm(index, event)}/>
      //               <br/>
      //               <hr />
      //           </div>
      //           )
      //           break;
            
      //           case "adq":
      //             return (
      //               <div key={index} id={index + 1}>
      //                 <h1>Question {index + 1}</h1><input name='questionText' placeholder='Question text goes here....' value={question.questionText} onChange={event => updateForm(index, event)}/>
      //                 <br/>
                      
      //                 <div className='inline'>
      //                 <label className='disagreeLabel'>Disagree</label>
      //                 <input type="radio" name={'Option ' + index} id='Answer' className='StronglyDisagree'/>
      //                 <input type="radio" name={'Option ' + index} id='Answer' className='Disagree'/>
      //                 <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatDisagree'/>
      //                 <input type="radio" name={'Option ' + index} id='Answer' className='Neutral'/> 
      //                 <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatAgree'/>
      //                 <input type="radio" name={'Option ' + index} id='Answer' className='Agree'/> 
      //                 <input type="radio" name={'Option ' + index} id='Answer' className='StronglyAgree'/> 
      //                 <label className='agreeLabel'>Agree</label>
      //                 </div>
      //                 <hr />
      //             </div>
      //             )
      //           break;
            
      //           case "short":
      //             return (
      //               <div key={index} id={index + 1}>
      //                 <h1>Question {index + 1}</h1>
      //                 <input name='questionText' placeholder='Question text goes here....' value={question.questionText} onChange={event => updateForm(index, event)} required/>
      //                 <br/>
      //             </div>
      //             )
      //           break;
            
      //         default:
      //             return (
      //               <div key={index} id={index + 1}>
      //                 <h1>Select a Question Type: </h1>
      //                 <br/>
      //             </div>
      //             )
      //           break;
      //       }
      //       })}
      //   <input type="button" value="Submit" onClick={submitForm}/>
      //   <input type="button" value="Add agree-disagree question" onClick={addAdqQuestion} />
      //   <input type="button" value="Add multiple-choice question" onClick={addMcqQuestion} />
      //   <input type="button" value="Add short-answer question" onClick={addShortQuestion} />
      //   </form>
      //   </div>
    );
}


export default Question
