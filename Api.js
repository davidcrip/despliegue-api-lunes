//* se importa el paquete de express
import express from 'express'
import cors from 'cors'
import {rutas} from './routes/rutas.js'
import {establecerconexion} from './database/conexion.js'

export class Api{
  
  constructor(){
    //* aqui van los atributos del objeto
    this.app = express()
    this.conectarBD ()
    this.procesarPeticiones()

  }

  levantarServidor(){
    ////process.env.PORT ----> se utiliza para poder llamar la variable que está en el archivo .env, que se llama port y contiene el puerto por que cual se va a ejecutar la api
    this.app.listen(process.env.PORT, ()=>{
      console.log('servidor operando con exito')
    })
  }
  procesarPeticiones(){
    //? se garantiza que el puerto quede abierto para poder utlizarlo con normalidad, pero se debe de tener cuidado por la seguridad 
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use('/',rutas)
    
  }
  conectarBD(){
    establecerconexion()
  }
}