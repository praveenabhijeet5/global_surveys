/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Noah Mauro
Nathaniel Needham
Praveen Tripathi

ShortQuestions.jsx handles the creation of short-answer questions
*/

import { useState } from 'react'
import './main.css'
import { toPairs } from 'lodash';

function ShortQuestions() {
  const [questions, setQuestions] = useState([ //uses useState to handle the form
    { 
      questionText: '',
      Answer : ''
    }])

    const updateForm = (index, event) => { //updates form onChange
      const name = event.target.name;
      const value = event.target.value;
      let q = [...questions];
      q[index][name] = value;
      setQuestions(q);
    } 
  
    const submitForm = (e) => { // submits the created form
      e.preventDefault;
      let survey = { //creates new survey object
        name : document.getElementById("surveyName").value,
        questions : questions,
        status : 'inactive'
      }
      if (document.getElementById("surveyName").value == ""){
        alert("You have not entered the survey's name.");
        return
      }
      if (document.querySelector("input[type='radio'][name=status]:checked")){
        if (document.querySelector("input[type='radio'][name=status]:checked").id == 'active'){ //Checks if survey status has been selected
            survey.status = 'active'//sets survey status
        }
        else{
          survey.status = 'inactive' // sets survey status
        }
      }
      else{
        alert("You have not selected whether this survey should be active or inactive.") //alerts the user if they have not selected survey status
        return
      }
      let iterator = [...survey.questions]
      for (let index = 0; index < iterator.length; index++) { //form validation: Checks whether all questionText inputs have values
        if (iterator[index].questionText == "")
        {
          let num = index+1;
          alert("You have not asked question: " + num)
          return
        } 
      }
      alert(JSON.stringify(survey, null, 1))
    }

    const addQuestion = () => {
      let newQuestion = { 
        questionText: '',
        Answer: ''
      }
    let q = [...questions];
    console.log(q);
    q = [...questions, newQuestion]; //appends newQuestion to the array of question objects
    console.log(q)
    setQuestions(q);
    }
  
    return (
      <div className='SurveyCreation'>
        <form id='Form'>
          <label htmlFor="name">Survey name: </label>
          <input name='name' id="surveyName" placeholder='Enter survey name here...' required/>
          <br />
          <label htmlFor="status" id="radioLabel">Survey Status:</label><br />
          <input type="radio" name="status" id="active"/> <label htmlFor="active" required>Active</label>
          <input type="radio" name="status" id="inactive"/> <label htmlFor="inactive" required>Inactive</label>
            {questions.map((question, index) => {
            return (
              <div key={index} id={index + 1}>
                <h1>Question {index + 1}</h1>
                <input name='questionText' placeholder='Question text goes here....' value={question.questionText} onChange={event => updateForm(index, event)} required/>
                <br/>
            </div>
            )})}
        <input type="button" value="Submit" onClick={submitForm}/>
        <input type="button" value="add question" onClick={addQuestion} />
        </form>
        </div>
    );
}


export default ShortQuestions
