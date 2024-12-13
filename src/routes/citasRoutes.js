import { Router } from 'express';
const router = Router();
import { createAppointment, getAppointment, updateAppointment, deleteAppointment, listAppointments } from '../controllers/citasController';

// Crear una nueva cita
router.post('/appointments', createAppointment);

// Consultar una cita específica
router.get('/appointments/:id', getAppointment);

// Actualizar detalles de una cita
router.put('/appointments/:id', updateAppointment);

// Eliminar una cita
router.delete('/appointments/:id', deleteAppointment);

// Listar todas las citas
router.get('/appointments', listAppointments);

export default router;