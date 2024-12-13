import citas from './citasORM.js';

export async function createAppointment(req, res) {
    const newCita = req.body;
    await citas.crearCita(newCita);
    res.status(201).send(newCita);
}

export async function getAppointment(req, res) {
    const cita = await citas.obtenerCita(req.params.id);
    if (cita) {
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export async function updateAppointment(req, res) {
    const updatedCita = req.body;
    const cita = await citas.actualizarCita(req.params.id, updatedCita);
    if (cita) {
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export async function deleteAppointment(req, res) {
    const cita = await citas.eliminarCita(req.params.id);
    if (cita) {
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export async function listAppointments(req, res) {
    const citasList = await citas.listarCitas();
    res.send(citasList);
}