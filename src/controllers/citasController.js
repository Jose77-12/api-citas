import citas from './citasORM.js';

export async function createAppointment(req, res) {
    const newCita = req.body;
    await citas.crearCita(newCita);
    res.status(201).send(newCita);
}

export function getAppointment(req, res) {
    const cita = citas.obtenerCita(req.params.id);
    if (cita) {
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export function updateAppointment(req, res) {
    const updatedCita = req.body;
    const cita = citas.actualizarCita(req.params.id, updatedCita);
    if (cita) {
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export function deleteAppointment(req, res) {
    const cita = citas.eliminarCita(req.params.id);
    if (cita) {
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export function listAppointments(req, res) {
    const citasList = citas.listarCitas();
    res.send(citasList);
}