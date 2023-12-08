import Survey from '../models/survey.model.js'
	import extend from 'lodash/extend.js'
	import errorHandler from './error.controller.js'

const create = async (req, res) => {
const survey = new Survey(req.body) 
try {
await survey.save()
return res.status(200).json({ 
message: "New survey created successfully"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}


const list = async (req, res) => { 
	try {
	let surveys = await Survey.find().select('question answer') 
	res.json(surveys)
	} catch (err) {
	return res.status(400).json({
	error: errorHandler.getErrorMessage(err) 
	})
	} 
	}

const surveyByID = async (req, res, next, id) => { 
try {
let survey = await Survey.findById(id) 
if (!survey)
return res.status('400').json({ 
error: "Survey not found in database"
})
req.profile = survey
next()
} catch (err) {
return res.status('400').json({ 
error: "Failed to retrieve survey"
}) 
}
}
	
const read = (req, res) => {
	return res.json(req.profile) 
	}


const update = async (req, res) => { 
	try {
	let survey = req.profile
	survey = extend(survey, req.body)
	survey.updated = Date.now() 
	await survey.save()
res.json(survey) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

const remove = async (req, res) => { 
try {
let survey = req.profile
let deletedSurvey = await survey.deleteOne() 
res.json(deletedSurvey) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

export default { create, surveyByID, read, list, remove, update }

