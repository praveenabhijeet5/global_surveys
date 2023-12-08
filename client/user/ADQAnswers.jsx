/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/


import { useState } from 'react'
import './main.css'

function ADQAnswers() {
  
  let surveyQuestions = [{'':''}]; //insert the json array of created questions into this variable
  surveyQuestions = [ { //sample questions for demonstration
       "questionText": "What's your favorite drink?",
       "Answer": "" //Answer field holds the selected answer
      },
      {
       "questionText": "What's your favorite meat?",
       "Answer": ""
      },
      {
       "questionText": "What is your favorite fast food chain?",
       "Answer": ""
      },
      {
       "questionText": "What is your favorite pizza topping?",
       "Answer": ""
      },
      {
       "questionText": "What is your favorite fast food mascot?",
       "Answer": ""
      },
      {
       "questionText": "What is your favorite soda?",
       "Answer": ""
      }
     ];

    let survey = {
      name : "default name",
      questions : surveyQuestions
    }
  
  const [answers, setAnswers] = useState(surveyQuestions)  
  const setCorrectAnswer = (index, event, value) => { //sets selected radio button and updates {answers}
    let q = [...answers]; 
    q[index][event.target.id] = value; //for each question, grab radio button and assign the value
    console.log("radio: " + value);
    setAnswers(q);
  }

  const submitAnswers = (event) => {//performs form validation
    event.preventDefault;
    //because answers is already completed, all we need is to do is set the selected option for the radio buttons
    for (let index = 0; index < answers.length; index++) { //for each option, check if an answer has been selected. If not, send error message.
      let q = answers[index];
      let i = index + 1;
      if (q.Answer == "") {
        alert("You have not answered question #" + i + ". Please answer before continuing.") //alert the user to unanswered questions
        return;
      }
      console.log("radio :"+q.radio);
    }
    let submittedSurvey = {
      name: survey.name,
      answers: answers
    }
    alert(JSON.stringify(submittedSurvey, null, 1)) //replace with json saving code
  }

  return (
    <div  className='Answer'>
      <form>
        <h1>
          {survey.name}
        </h1>
        <hr />
        {survey.questions.map( (question, index) => {return ( //iterates over the json array and returns the form elements
        <div key={index}>
        <h3>Question {index + 1}</h3> 
        <hr /> 
        <label name="questionText"><h4>{question.questionText}</h4></label> <br /> {/*Label for holding the survey question*/}
          {/*radio buttons share the same name, and are separated from other questions' radio buttons by using the index*/}
          <div className='inline'>
                <label className='disagreeLabel'>Disagree</label>
                <input type="radio" name={'Option ' + index} id='Answer' className='StronglyDisagree'onChange={event => setCorrectAnswer(index, event, 'Strongly Disagree')}/>
                <input type="radio" name={'Option ' + index} id='Answer' className='Disagree' onChange={event => setCorrectAnswer(index, event, 'Disagree')}/>
                <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatDisagree'onChange={event => setCorrectAnswer(index, event, 'Somewhat Disagree')}/>
                <input type="radio" name={'Option ' + index} id='Answer' className='Neutral'onChange={event => setCorrectAnswer(index, event, 'Neutral')}/> 
                <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatAgree'onChange={event => setCorrectAnswer(index, event, 'Somewhat Agree')}/>
                <input type="radio" name={'Option ' + index} id='Answer' className='Agree'onChange={event => setCorrectAnswer(index, event, 'Agree')}/> 
                <input type="radio" name={'Option ' + index} id='Answer' className='StronglyAgree'onChange={event => setCorrectAnswer(index, event, 'Strongly Agree')}/> 
                <label className='agreeLabel'>Agree</label>
                </div>  
          <hr />
        </div>)})}
        <input type="button" value="Submit" onClick={submitAnswers}/>
      </form>
    </div>
  );
}

export default ADQAnswers
