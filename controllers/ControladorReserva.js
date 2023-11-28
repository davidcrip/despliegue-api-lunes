
import {ServicioReserva} from '../services/ServicioReserva.js'


export class ControladorReserva{
  constructor() {}

  async registrarReserva(request, response){
    try{
      //* 1. esculcar los dats que se quieren usar para el registro
      let servicioReserva = new ServicioReserva()
      let datosReservaRegistrar = request.body
      //# calcular el costo total de la reserva
      // const costoTotal = calcularCostoTotal(
      //   datosReservaRegistrar.fechaEntrada,
      //   datosReservaRegistrar.fechaSalida,
      //   datosReservaRegistrar.cantidadPersonas
      // );
      // const habitacion = await modeloHabitacion.findById(datosReservaRegistrar.idHabitacion);
      // if (!habitacion) {
      //   return response.status(404).json({ mensaje: 'La habitación no existe' });
      // }
      // const costoHabitacion = habitacion.costo;
      // datosReservaRegistrar.costoTotal = costoTotal + costoHabitacion;
      // const nuevaReserva = new ServicioReserva();
      // await nuevaReserva.save();
      await servicioReserva.registrarReserva(datosReservaRegistrar)
      //* 2. validar los datos
      //* 3. se intenta enviar los datos a la base de datos si estan correctos o si no hay algun error
      //* 4. responder 
      response.status(200).json({
        'mensaje' : 'exito en la operacion de guardado',
        'datos' : datosReservaRegistrar
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la oprecion de guardado' + error
      })
    }
  }
  async buscarReservas(request, response){
    try{
      let servicioReserva = new ServicioReserva()
      //* 1. intentar buscar los datos en BD
      //* 2. responder
      response.status(200).json({//* el .JSON se utiliza para poder guardar los datos, ya que guardan como objeto
        'mensaje' : 'exitoen la operacion de buscar',
        'datos' : await servicioReserva.buscarReservas()
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la oprecion de guardado' + error
      })
    }
  }
  async buscarReservaId(request, response){
    try{
      let servicioReserva = new ServicioReserva()
      //* 1. esculcar los parametros de la peticion
      let idBuscarReserva = request.params.id
      //* 2. validar que el dato sea correcto
      //* 3. intento buscar el dato en BD
      //* 4. responder
      response.status(200).json({
        'mensaje' : 'exito en la operacion de buscar',
        'datos' : await servicioReserva.buscarReservaId(idBuscarReserva)
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la oprecion de buscar' + error
      })
    }
  }
  async modificarReserva(request, response){
    try{
      let servicioReserva = new ServicioReserva()
      //* 1. traigo el id a editar de la peticiones
      let idReservaModificar = request.params.id
      let datosReservaModificar = request.body
      //* 2. validar los datos 
      //* 3. buscar y modificar en BD
      await servicioReserva.modificarReserva(idReservaModificar, datosReservaModificar)
      response.status(200).json({
        'mensaje' : 'exitoen la operacion de edicion',
        'datos' : datosReservaModificar
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la oprecion de edicion' + error
      })
    }
  }
  async borrarReserva(request, response){
    try{
      let servicioReserva = new ServicioReserva()
      let idReservaBorrar = request.params.id
      //* validar
      //* intento borrar la habitacion en BD
      await servicioReserva.borrarReserva(idReservaBorrar)
      //* responder
      response.status(200).json({
        'mensaje' : 'exitoen la operacion de borrado'
      })

    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la oprecion de borrado' + error
      })
    }
  }
}


