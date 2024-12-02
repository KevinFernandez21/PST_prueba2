const {Router}=require('express');
const router = Router();

const {getProfesoresPractica} = require('../controllers/practicaControl');

router.route('/').get(getProfesoresPractica)

module.exports = router