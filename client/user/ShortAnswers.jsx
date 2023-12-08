/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Noah Mauro
Nathaniel Needham
Praveen Tripathi

ShortAnswers.jsx handles the creation of short-answer surveys and the submitting of user answers.
*/

import { useState } from 'react'
import './main.css'

function ShortAnswers() {
    let survey = {
      "name": "1",
      "questions": [
       {
        "questionText": "Q1",
        "Answer": ""
       },
       {
        "questionText": "Q2",
        "Answer": ""
       },
       {
        "questionText": "Q3",
        "Answer": ""
       },
       {
        "questionText": "q4",
        "Answer": ""
       },
       {
        "questionText": "q5",
        "Answer": ""
       },
       {
        "questionText": "q6",
        "Answer": ""
       },
       {
        "questionText": "q7",
        "Answer": ""
       }
      ],
      "status": "inactive"
     }

  const [answers, setAnswers] = useState(survey.questions)

  const updateForm = (index, event) => {
    const name = event.target.name;
    const value = event.target.value;
    let q = [...answers];
    q[index][name] = value;
    setAnswers(q)
  }

  const submitAnswers = (event) => {//performs form validation
    event.preventDefault;
   
    let submittedSurvey = {
      name: survey.name,
      answers: answers
    }

    for (let index = 0; index < answers.length; index++) {
      let q = answers[index];
      let i = index + 1;
      if (q.Answer == "") {
        alert("You have not answered question #" + i + ". Please answer before continuing.") //alert the user to unanswered questions
        return;
      }
    }

    alert(JSON.stringify(submittedSurvey, null, 1)) //replace with json saving code
  }

  return (
    <div className='Answer'>
      <form>
        <h1>
          {survey.name}
        </h1>
        <hr />
        {survey.questions.map( (question, index) => {return ( //iterates over the json array and returns the form elements
        <div key={index}>
        <h3>Question {index + 1}</h3> 
        <hr /> 
        <label name="questionText">{question.questionText}</label> <br /> {/*Label for holding the survey question*/}
          {/*user's question answer is entered below*/}
          <input name='Answer' placeholder='Enter answer text here...' onChange={event => updateForm(index, event)} required/>
          <hr />
        </div>)})}
        <input type="button" value="Submit" onClick={submitAnswers}/>
      </form>
    </div>
  );
}

export default ShortAnswers
