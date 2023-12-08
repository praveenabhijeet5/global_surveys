import mongoose from 'mongoose'

const ADQSchema = new mongoose.Schema({
question: {
    type: String,
    trim: true,
    required: 'Question is required'
},
 answer: {
    type:String
 }})

 export default mongoose.model('adq', ADQSchema)