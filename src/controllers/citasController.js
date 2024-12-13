class CitasController {
    constructor() {
        this.citas = [];
    }

    crearCita(req, res) {
        const { fecha, hora, cliente, descripcion } = req.body;
        const nuevaCita = { id: this.citas.length + 1, fecha, hora, cliente, descripcion };
        this.citas.push(nuevaCita);
        res.status(201).json(nuevaCita);
    }

    obtenerCitas(req, res) {
        res.status(200).json(this.citas);
    }

    actualizarCita(req, res) {
        const { id } = req.params;
        const { fecha, hora, cliente, descripcion } = req.body;
        const citaIndex = this.citas.findIndex(cita => cita.id === parseInt(id));

        if (citaIndex !== -1) {
            this.citas[citaIndex] = { id: parseInt(id), fecha, hora, cliente, descripcion };
            res.status(200).json(this.citas[citaIndex]);
        } else {
            res.status(404).json({ mensaje: 'Cita no encontrada' });
        }
    }

    eliminarCita(req, res) {
        const { id } = req.params;
        const citaIndex = this.citas.findIndex(cita => cita.id === parseInt(id));

        if (citaIndex !== -1) {
            this.citas.splice(citaIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ mensaje: 'Cita no encontrada' });
        }
    }
}

module.exports = new CitasController();