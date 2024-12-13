const express = require('express');
const CitasController = require('../controllers/citasController');

const router = express.Router();
const citasController = new CitasController();

const setCitasRoutes = (app) => {
    router.post('/citas', citasController.crearCita);
    router.get('/citas', citasController.obtenerCitas);
    router.put('/citas/:id', citasController.actualizarCita);
    router.delete('/citas/:id', citasController.eliminarCita);

    app.use('/api', router);
};

module.exports = setCitasRoutes;