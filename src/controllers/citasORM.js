import db from './db.js';

await db.query('CREATE TABLE IF NOT EXISTS citas (id SERIAL PRIMARY KEY, client_name TEXT, vehicle TEXT, date DATE, status TEXT)');

async function crearCita(cita) {
  await db.query('INSERT INTO citas (client_name, vehicle, date, status) VALUES ($1, $2, $3, $4)', [cita.client_name, cita.vehicle, cita.date, cita.status]);
}

async function obtenerCita(id) {
  return await db.query('SELECT * FROM citas WHERE id = $1', [id]);
}

async function actualizarCita(id, cita) {
  return await query('UPDATE citas SET client_name = $1, vehicle = $2, date = $3, status = $4 WHERE id = $5', [cita.client_name, cita.vehicle, cita.date, cita.status, id]);
}

async function eliminarCita(id) {
  return await query('DELETE FROM citas WHERE id = $1', [id]);
}

async function listarCitas() {
  return await query('SELECT * FROM citas');
}

export default { crearCita, obtenerCita, actualizarCita, eliminarCita, listarCitas };