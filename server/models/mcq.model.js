import mongoose from 'mongoose'

const MCQSchema = new mongoose.Schema({
question: {
    type: String,
    trim: true,
    required: 'Question is required'
},
 option1: {
    type:String
 },option2: {
    type:String
 },option3: {
    type:String
 },option4: {
    type:String
 },
answer:{type:String}})

 export default mongoose.model('mcq', MCQSchema)