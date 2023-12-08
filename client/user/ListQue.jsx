/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/


import { useState } from 'react'
import { useEffect } from 'react';
import './main.css'
// import answ from '../../client/user/Answers.jsx'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

let activeSurveys = [];
try {
  const response = await fetch('http://localhost:3000/api/surveys', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  console.log(data);
  activeSurveys.push.apply(activeSurveys, data)
  console.log("data2: " + activeSurveys)
} catch (error) {
  console.error('Error:', error);
}
console.log("ac: " + JSON.stringify(activeSurveys))
function ListQue() {

  return (
    <div className='ActiveSurveys'>
        {
        activeSurveys.map((survey, index) => { 
        
//          if (survey.status == "active"){
          if (survey.name){
            console.log(survey)
            let link =  "/client/user/Answers.jsx?surveyId=" + survey._id;
            return ( //iterates over the json array and returns the form elements
            <div key={index} className=''>
            <h1>{survey.name}</h1>
            <a className='btn btn-primary btn-lg' href={link}>Answer this survey.</a>
            {/* */}
            <hr />
            </div>)
          }
        })
        }
    </div>
  );
}


export default ListQue
