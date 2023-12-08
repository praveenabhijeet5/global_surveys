/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/


import { useState } from 'react'
import './main.css'

function MCQAnswers() {

    let survey = {
      name : "default name",
      questions : [ { //sample questions for demonstration
        "questionText": "What's your favorite drink?",
        "Answer1": "Milk", //answer fields are used to populate the values of radio button labels
        "Answer2": "Apple Juice",
        "Answer3": "Soda",
        "Answer4": "Water",
        "radio": "", //radio field is added for form validation
        "type":'mcq'

      },
       {
        "questionText": "What's your favorite meat?",
        "Answer": "",
        "type":'short'
       },
       {
        "questionText": "What is your favorite fast food chain?",
        "Answer": "",
        "type":'adq'

       },
       {
        "questionText": "What is your favorite pizza topping?",
        "Answer1": "Pineapple",
        "Answer2": "Chicken",
        "Answer3": "Extra cheese",
        "Answer4": "Pepperoni",
        "radio": "",
        "type":'n'
       },
       {
        "questionText": "What is your favorite fast food mascot?",
        "Answer1": "Ronald McDonald",
        "Answer2": "Wendy's",
        "Answer3": "Starbucks Mermaid",
        "Answer4": "Colonel Sanders (KFC)",
        "radio": "",
        "type":'mcq'
       },
       {
        "questionText": "What is your favorite soda?",
        "Answer1": "Coca-Cola",
        "Answer2": "Pepsi",
        "Answer3": "Fanta",
        "Answer4": "Ginger Ale",
        "radio": "",
        "type":'mcq'
       }
      ]
    }
  
  const [answers, setAnswers] = useState(survey.questions)  
  const setCorrectAnswer = (index, event, value) => { //sets selected radio button and updates {answers}
    let q = [...answers]; 
    q[index][event.target.type] = value; //for each question, grab radio button and assign the value
    console.log("radio: " + value);
    setAnswers(q);
  }

  const submitAnswers = (event) => {//performs form validation
    event.preventDefault;
    //because answers is already completed, all we need is to do is set the selected option for the radio buttons
    for (let index = 0; index < answers.length; index++) { //for each option, check if an answer has been selected. If not, send error message.
      let q = answers[index];
      let i = index + 1;
      console.log("CHECKING: q: " + index + ", t: " + q.type)
      console.log(q.questionText)
      if (q.type == "mcq")
      {
        if (q.radio == "")
        {
          alert("IS MCQ AND EMPTY APPARENTLY: q: " + index + ", t: " + q.type)
          alert(q.questionText)
          alert("You have not answered question #" + i + " of type: " + q.type + ". Please answer before continuing.") //alert the user to unanswered questions
          return;
        }
      }
      else{
        alert("not mcq stop harrassing me")
        console.log("qnotmcq: " + index + ", t: " + q.type)
        console.log(q.questionText)
      }
      console.log("SUPPOSED RADIO ANSWER: radio :"+q.radio);
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
        {survey.questions.map( (question, index) => {
          
          switch (question.type) {
            case "mcq":
              console.log(index + " mcq")
              // code for answering mcq questions
              return ( //iterates over the json array and returns the form elements
                <div key={index}>
                <h3>Question {index + 1}</h3> <hr /> <label name="questionText">{question.questionText}</label> <br /> {/*Label for holding the survey question*/}
                  {/*radio buttons share the same name, and are separated from other questions' radio buttons by using the index*/}
                  <div className='radioDiv'>
                    <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option1"} onChange={event => setCorrectAnswer(index, event, '1')}/>
                    <label htmlFor={index + "Option1"} name="Option1" >{question.Answer1}</label> <br />
                    <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option2"} onChange={event => setCorrectAnswer(index, event, '2')}/>
                    <label htmlFor={index + "Option2"} name="Option2" >{question.Answer2}</label> <br />
                    <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option3"} onChange={event => setCorrectAnswer(index, event, '3')}/>
                    <label htmlFor={index + "Option3"} name="Option3" >{question.Answer3}</label> <br />
                    <input type="radio" name={"Question " + index +" selected option:"} id={index + "Option4"} onChange={event => setCorrectAnswer(index, event, '4')}/>
                    <label htmlFor={index + "Option4"} name="Option4" >{question.Answer4}</label>
                  </div>
                  <hr />
                </div>)
              break;

            case "short":
              console.log(index + "short")
              return (<><h1> This is a short answer question.</h1> <hr /></>)
              break;

            case "adq":
              console.log(index + "adq")
              return (<><h1> This is an agree-disagree question.</h1> <hr /></>)
              break;
          
            default:
              console.log(index + "none")
              return (<><h1>This means the type attribute of this question has not been added, or the value is invalid.</h1> <hr /></>)
              break;
          }  
          
        })}
        <input type="button" value="Submit" onClick={submitAnswers}/>
      </form>
    </div>
  );
}

export default MCQAnswers
