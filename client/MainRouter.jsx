import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import React from 'react'
//import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'
// import Login from './lib/Login.jsx';
import Profile from './user/Profile.jsx'
import Surveys from './user/Surveys.jsx'
import AboutUs from './user/AboutUs.jsx'
import Footer from './core/Footer.jsx'
import Switch from 'react'
import PrivateRoute from './lib/PrivateRoute.jsx'
import EditProfile from './user/EditProfile.jsx'
import Menu from './core/Menu' 
import CreateQuestions from './user/CreateQuestions.jsx'
import Questions from './user/Questions.jsx'
import QuestionSet from './user/QuestionSet.jsx'
import ListQue from './user/ListQue.jsx'
import Answer from './user/Answers.jsx'
import MCQQuestions from './user/MCQQuestions.jsx'
import ShortQuestions from './user/ShortQuestions.jsx'
import ADQQuestions from './user/ADQQuestions.jsx'
import MCQAnswers from './user/MCQAnswers.jsx'
import ShortAnswers from './user/ShortAnswers.jsx'
import ADQAnswers from './user/ADQAnswers.jsx'

function MainRouter() {
        return (
          <div>
      <Menu/>  
      {/* aboutus */}
                        <Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/users" element={<Users />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/create" element={<Questions />} />
  <Route path="/activesurvey" element={<ListQue />} />
  <Route path="/surveys" element={<Surveys />} />
  <Route path="/answer" element={<Answer />} />
  <Route path="/aboutus" element={<AboutUs />} />
  <Route path="/mcquestion" element={<MCQQuestions />} />
  <Route path="/shortquestion" element={<ShortQuestions />} />
  <Route path="/ad_question" element={<ADQQuestions />} />
  <Route path="/mcanswer" element={<MCQAnswers />} />
  <Route path="/shortanswer" element={<ShortAnswers />} />
  <Route path="/ad_answer" element={<ADQAnswers />} />
  <Route path="/createquestions" element={<CreateQuestions />} />
  <Route
    path="/user/edit/:userId"
    element={
      <PrivateRoute>
        <EditProfile />
      </PrivateRoute>
    }
  />
  <Route path="/user/:userId" element={<Profile />} />
  <Route path="/surveys/:id" element={<QuestionSet />} />

</Routes>
    <div>
      <Footer/>
    </div>
</div>
  );
}

export default MainRouter;
