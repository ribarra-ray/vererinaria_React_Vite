import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'



function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? [])
  const [pacienteEdit, setPacienteEdit] = useState({})

  const isFunc = (valor)=>{return "es funcion y se le paso el parametro: "+valor;} 
  const fEliminarPaciente= (idDinamico)=>{
    setPacientes( pacientes.filter(f=> f.idDinamico !== idDinamico))
  }


  useEffect(()=>{
      console.log("app")
  },[])

  useEffect(()=>{
      localStorage.setItem("pacientes", JSON.stringify(pacientes))
      console.log("listado")
  }, [pacientes])
  
  return (
    <div className='mx-auto mt-5'>
      <Header isFunc={isFunc}/>
      <div className='mt-2 md:flex justify-evenly'>
        <Formulario pacientes={pacientes} setPacientes = {setPacientes} pacienteEdit={pacienteEdit} setPacienteEdit={setPacienteEdit} ></Formulario>
        <ListadoPacientes pacientes={pacientes} setPacienteEdit={setPacienteEdit} fEliminarPaciente={fEliminarPaciente}></ListadoPacientes>
      </div>
      
    </div>
  )
}

export default App
