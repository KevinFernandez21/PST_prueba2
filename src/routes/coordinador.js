const {Router}=require('express');
const router = Router();

const {getCoordinador} = require('../controllers/coordinadorControl.js');

router.route('/').get(getCoordinador)

module.exports = router