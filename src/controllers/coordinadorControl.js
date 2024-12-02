const estControl = {};
const db = require('./database.js');

estControl.getCoordinador = (req,res)=>res.json(db.coordinador);

module.exports = estControl;