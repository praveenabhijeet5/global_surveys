import express from 'express'
import surveyCtrl from '../controllers/survey.controller.js' 


const router = express.Router()

router.route('/api/surveys') 
.get(surveyCtrl.list) //get all
.post(surveyCtrl.create) //create one

//for /api/users/:userId
router.param('surveyId', surveyCtrl.surveyByID)
router.route('/api/surveys/:surveyId')
.get(surveyCtrl.read)
.put(surveyCtrl.update)
.delete(surveyCtrl.remove)    

router.param('surveyId', surveyCtrl.surveyByID)
router.route('api/surveys').post(surveyCtrl.create)
router.route('api/surveys').get(surveyCtrl.list)
router.route('api/surveys/:id').get(surveyCtrl.read)
router.route('api/surveys/:id').put(surveyCtrl.update)
router.route('api/surveys/:id').delete(surveyCtrl.remove)

    
export default router
