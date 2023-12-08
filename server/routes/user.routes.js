import express from 'express'
import userCtrl from '../controllers/user.controller.js' 
import authCtrl from '../controllers/auth.controller.js'
import surveyCtrl from '../controllers/survey.controller.js' 

	const router = express.Router()
	router.route('/api/users') 
	.get(userCtrl.list)
	.post(userCtrl.create)
	/*router.route('/api/users/:userId') 
	.get(userCtrl.read)
	.put(userCtrl.update) 
	.delete(userCtrl.remove)*/
	router.route('/api/users/:userId')
.get(authCtrl.requireSignin, userCtrl.read)
.put(authCtrl.requireSignin, authCtrl.hasAuthorization, 
userCtrl.update)
.delete(authCtrl.requireSignin, authCtrl.hasAuthorization, 
userCtrl.remove)
router.param('userId', userCtrl.userByID)
router.route('/api/users').post(userCtrl.create) 
router.route('/api/users').get(userCtrl.list)
router.param('userId', userCtrl.userByID)
router.route('/api/users/:userId').get(userCtrl.read)
router.route('/api/users/:userId').put(userCtrl.update)
router.route('/api/users/:userId').delete(userCtrl.remove)

/////////////////////////////////////////////////////////////


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

////////////////////////////////////////////////////////////////

// router.route('/api/questions') 
// .get(surveyCtrl.list) //get all
// .post(surveyCtrl.create) //create one

// //for /api/users/:userId
// router.param('surveyId', surveyCtrl.surveyByID)
// router.route('/api/questions/:surveyId')
// .get(surveyCtrl.read)
// .put(surveyCtrl.update)
// .delete(surveyCtrl.remove)    

// router.param('surveyId', surveyCtrl.surveyByID)
// router.route('api/questions').post(surveyCtrl.create)
// router.route('api/questions').get(surveyCtrl.list)
// router.route('api/questions/:id').get(surveyCtrl.read)
// router.route('api/questions/:id').put(surveyCtrl.update)
// router.route('api/questions/:id').delete(surveyCtrl.remove)
    
	export default router
