/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/



import { useState } from 'react'
import './main.css'
import { toPairs } from 'lodash';

function MCQQuestions() {
  const [questions, setQuestions] = useState([
    { 
      questionText: '',
      Answer1: '',
      Answer2: '',
      Answer3: '',
      Answer4: '',
      radio:'', //radio field is added for form validation in the Answer.jsx file
      type:''
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


      
      alert(JSON.stringify(survey, null, 1))
    }
  
    const addQuestion = () => {
      let newQuestion = { 
        questionText: '',
        Answer1: '',
        Answer2: '',
        Answer3: '',
        Answer4: '',
        radio:'', //radio field is added for form validation in the Answer.jsx file
        type:''
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
            <input type="radio" name={'Option ' + index} id='Option' onClick={event => setCorrectAnswer(index, event, '1')}/> 
            
            return (
              <div key={index} id={index + 1}>
                <h1>Question {index + 1}</h1><input name='questionText' placeholder='Question text goes here....' value={question.questionText} onChange={event => updateForm(index, event)}/>
                <br/>
                {/*radio inputs are here for visual purposes only*/}
                <input type="radio" name={'Option ' + index} id='Option' /> 
                {/*text inputs are used to gather the option text for each question*/}
                <input name='Answer1' placeholder='Enter answer text here...' value={question.Answer1} onChange={event => updateForm(index, event)}/>
                <br/>
                <input type="radio" name={'Option ' + index} id='Option'/> 
                <input name='Answer2' placeholder='Enter answer text here...' value={question.Answer2} onChange={event => updateForm(index, event)}/>
                <br/>
                <input type="radio" name={'Option ' + index} id='Option'/> 
                <input name='Answer3' placeholder='Enter answer text here...' value={question.Answer3} onChange={event => updateForm(index, event)}/>
                <br/>
                <input type="radio" name={'Option ' + index} id='Option'/> 
                <input name='Answer4' placeholder='Enter answer text here...' value={question.Answer4} onChange={event => updateForm(index, event)}/>
                <br/>
                <hr />
            </div>
            )})}
        <input type="button" value="Submit" onClick={submitForm}/>
        <input type="button" value="add question" onClick={addQuestion} />
        </form>
        </div>
    );
}


export default MCQQuestions
