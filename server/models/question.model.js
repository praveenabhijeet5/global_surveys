import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
question: {
    type: String,
    trim: true,
    required: 'Question is required'
},
 answer: {
    type:String
 }})

 export default mongoose.model('Question', QuestionSchema)