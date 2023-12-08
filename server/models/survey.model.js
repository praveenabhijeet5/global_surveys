// import mongoose, { Schema } from 'mongoose'
// import Question from './question.model.js'

// const SurveySchema = new mongoose.Schema({
// name: {
//     type: String,
//     trim: true,
//     required: 'Survey name is required'
// },
//  User: {type: Schema.Types.ObjectId, ref: 'User'},
//  questions : [Question.schema],
//  created: {
// type: Date,
// default: Date.now
// },
// updated: {
// type: Date,
// default: Date.now
// }})


//////////////////////////////////////////////////////

import mongoose from 'mongoose'

const SurveySchema = new mongoose.Schema({
    question: {
        type: String,
        trim: true,
        required: 'Question is required'
    },
     answer: {
        type:String
     }})

export default mongoose.model('Survey', SurveySchema)