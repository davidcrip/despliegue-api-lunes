//* se importa el paquete de express
import express from 'express'
import {ControladorHabitacion} from '../controllers/ContraladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

//*para poder llamar a un controlador
//* debo crear un objeto de la clase controladorHabitacion

let controladorHabitacion = new ControladorHabitacion();
let controladorReserva = new ControladorReserva();

export let rutas = express.Router()

//? se nombra el servicio y se llama el controlador para revise las peticiones, para lashabitaciones
//! ED (end points --- es el nombre que se le brinda a la ruta)

rutas.post('/api/habitaciones', controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionId)
rutas.get('/api/habitaciones', controladorHabitacion.buscarHabiaciones)
rutas.put('/api/habitaciones/:id', controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id', controladorHabitacion.borrarHabitacion)



//? se nombra el servicio y se llama el controlador para revise las peticiones, para las reservas
rutas.post('/api/reservas', controladorReserva.registrarReserva)
rutas.get('/api/reserva/:id', controladorReserva.buscarReservaId)
rutas.get('/api/reservas', controladorReserva.buscarReservas)
rutas.put('/api/reservas/:id', controladorReserva.modificarReserva)
rutas.delete('/api/reservas/:id', controladorReserva.borrarReserva)