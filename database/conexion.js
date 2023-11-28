import mongoose from "mongoose";

export async function establecerconexion(){
  try{
    await mongoose.connect(process.env.DATABASE)
    console.log('exito en la conexion')
  }catch(error){
    console.log('fallamos conectandonos' + error)

  }
}