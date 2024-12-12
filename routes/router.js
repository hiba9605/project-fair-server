const express=require('express')
const userController=require('../controllers/userController')
const projectController=require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')


const router=new express.Router()

// register - POST
router.post('/register',userController.registerController)

// login - POST
router.post('/login',userController.loginController)

// add-project - POST
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImage'),projectController.addProjectController)


// Home project - GET
router.get('/home-projects',projectController.getHomeProjectsController)

// user project - GET
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectsController)

// all project - GET
router.get('/all-projects',jwtMiddleware,projectController.getAllProjectsController)


// edit-project - PUT
router.put('/projects/:id/edit',jwtMiddleware,multerMiddleware.single("projectImage"),projectController.editProjectController)


// remove-project - DELETE
router.delete('/projects/:id/remove',jwtMiddleware,projectController.removeProjectController)

// edit user
router.put('/user/edit',jwtMiddleware,multerMiddleware.single("profilePic"),userController.editUserController)



module.exports=router