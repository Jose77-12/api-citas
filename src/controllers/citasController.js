const citas = []; // Esto es solo un ejemplo, deberías usar una base de datos real

export function createAppointment(req, res) {
    const newCita = req.body;
    citas.push(newCita);
    res.status(201).send(newCita);
}

export function getAppointment(req, res) {
    const cita = citas.find(c => c.id === req.params.id);
    if (cita) {
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export function updateAppointment(req, res) {
    const cita = citas.find(c => c.id === req.params.id);
    if (cita) {
        Object.assign(cita, req.body);
        res.send(cita);
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export function deleteAppointment(req, res) {
    const index = citas.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        citas.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send({ message: 'Cita no encontrada' });
    }
}

export function listAppointments(req, res) {
    res.send(citas);
}