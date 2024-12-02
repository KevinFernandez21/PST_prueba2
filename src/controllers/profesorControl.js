const estControl = {};
const db = require('./database.js');

// Función para obtener los profesores de práctica
estControl.getProfesoresPractica = (req, res) => res.json(db.practica);

// Función para obtener el coordinador
estControl.getCoordinador = (req, res) => res.json(db.coordinador);

// Función para agregar un nuevo profesor
estControl.postProfesor = (req, res) => {
    const { nombre, edad } = req.body;

    // Validación de datos completos
    if (!nombre || !edad) {
        res.status(400).send("Datos incompletos {nombre, edad}");
        return;
    }

    // Validación de nombre duplicado
    const profesorExistente = db.practica.find(prof => prof.nombre === nombre);
    if (profesorExistente) {
        res.status(400).send("Profesor con este nombre ya existe");
        return;
    }

    // Agregar nuevo profesor
    const profesor = { nombre, edad };
    db.practica.push(profesor);
    db.updateDB();
    res.send("Profesor agregado con éxito");
};

// Función para actualizar un profesor
estControl.putProfesor = (req, res) => {
    const { nombre, edad } = req.body;

    // Validación de datos completos
    if (!nombre || !edad) {
        res.status(400).send("Datos incompletos {nombre, edad}");
        return;
    }

    // Buscar el profesor por nombre
    const profesor = db.practica.find(prof => prof.nombre === nombre);

    // Validación de existencia del profesor
    if (!profesor) {
        res.status(400).send("Profesor no encontrado");
        return;
    }

    // Actualizar datos del profesor
    profesor.edad = edad;
    db.updateDB();
    res.send("Profesor actualizado");
};

// Función para eliminar un profesor
estControl.deleteProfesor = (req, res) => {
    const { nombre } = req.body;

    // Validación de dato completo
    if (!nombre) {
        res.status(400).send("Datos incompletos {nombre}");
        return;
    }

    // Buscar el índice del profesor por nombre
    const index = db.practica.findIndex(prof => prof.nombre === nombre);

    // Validación de existencia del profesor
    if (index === -1) {
        res.status(400).send("Profesor no encontrado");
        return;
    }

    // Eliminar el profesor
    db.practica.splice(index, 1);
    db.updateDB();
    res.send("Profesor eliminado");
};

module.exports = estControl;
