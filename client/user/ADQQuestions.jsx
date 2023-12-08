/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/



import { useState } from 'react'
import './main.css'
import { toPairs } from 'lodash';

function ADQQuestions() {
  const [questions, setQuestions] = useState([
    { 
      questionText: '',
      Answer:'' //radio field is added for form validation in the Answer.jsx file
    }])

    const updateForm = (index, event) => {
      const name = event.target.name;
      const value = event.target.value;
      let q = [...questions];
      q[index][name] = value;
      setQuestions(q);
    } 
  
    const submitForm = (e) => {
      e.preventDefault;
  /*    console.log(questions)
        alert(JSON.stringify(questions, null, 1))
  */
      let survey = {
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
        radio:''//radio field is added for form validation in the Answer.jsx file
      }
    let q = [...questions];
    console.log(q);
    q = [...questions, newQuestion]; //appends newQuestion to the array of question objects
    console.log(q)
    setQuestions(q);
    }
  
    return (
      <div className='SurveyCreation'>
        <form>
          <label htmlFor="name">Survey name: </label>
          <input name='name' id="surveyName" placeholder='Enter survey name here...'/>
          <br />
          <label htmlFor="status" id="radioLabel">Survey Status:</label><br />
          <input type="radio" name="status" id="active"/> <label htmlFor="active">Active</label>
          <input type="radio" name="status" id="inactive"/> <label htmlFor="inactive">Inactive</label>
            {questions.map((question, index) => {
            <input type="radio" name={'Option ' + index} id='Answer' onClick={event => setCorrectAnswer(index, event, '1')}/> 

            return (
              <div key={index} id={index + 1}>
                <h1>Question {index + 1}</h1><input name='questionText' placeholder='Question text goes here....' value={question.questionText} onChange={event => updateForm(index, event)}/>
                <br/>
                
                <div className='inline'>
                <label className='disagreeLabel'>Disagree</label>
                <input type="radio" name={'Option ' + index} id='Answer' className='StronglyDisagree'/>
                <input type="radio" name={'Option ' + index} id='Answer' className='Disagree'/>
                <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatDisagree'/>
                <input type="radio" name={'Option ' + index} id='Answer' className='Neutral'/> 
                <input type="radio" name={'Option ' + index} id='Answer' className='SomewhatAgree'/>
                <input type="radio" name={'Option ' + index} id='Answer' className='Agree'/> 
                <input type="radio" name={'Option ' + index} id='Answer' className='StronglyAgree'/> 
                <label className='agreeLabel'>Agree</label>
                </div>
                <hr />
            </div>
            )})}
        <input type="button" value="Submit" onClick={submitForm}/>
        <input type="button" value="add question" onClick={addQuestion} />
        </form>
        </div>
    );
}


export default ADQQuestions
