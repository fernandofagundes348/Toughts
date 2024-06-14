const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtsController')

//helper
const checkAuth = require('../helpers/auth').checkAuth

//controller
router.post('/add', checkAuth,ToughtController.createToughtSave)
router.get('/add', checkAuth,ToughtController.createTought)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.post('/remove', checkAuth, ToughtController.removeTought)
router.get('/', ToughtController.showToughts)

module.exports = router