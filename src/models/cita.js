class Cita {
    constructor(id, fecha, hora, cliente, descripcion) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.descripcion = descripcion;
    }
}

module.exports = Cita;