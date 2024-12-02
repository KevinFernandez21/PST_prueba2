const estControl = {};
const db = require('./database.js');

estControl.getProfesoresPractica = (req,res)=>res.json(db.practica);

module.exports = estControl;