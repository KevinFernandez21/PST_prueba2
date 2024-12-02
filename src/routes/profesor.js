const { Router } = require('express');
const router = Router();

const {
    getCoordinador,
    getProfesoresPractica,
    postProfesor,
    putProfesor,
    deleteProfesor
} = require('../controllers/profesorControl.js');

// Rutas para obtener datos
router.route('/practica').get(getProfesoresPractica);
router.route('/teorico').get(getCoordinador);

// Rutas para gestionar profesores (POST, PUT, DELETE)
router.route('/profesor')
    .post(postProfesor)      // Crear profesor
    .put(putProfesor)        // Actualizar profesor
    .delete(deleteProfesor); // Eliminar profesor

module.exports = router;
