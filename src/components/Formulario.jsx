import {useState, useEffect} from 'react'
import Error from './Error'


const Formulario = ({pacientes, setPacientes, pacienteEdit, setPacienteEdit}) => {
  const [nombre, setNombre] = useState("mascota")
  const [propietario, setPropietario] = useState("Raynier")
  const [email, setEmail] = useState("raynier@dominio.com")
  const [fechaAlta, setFechaAlta] = useState( Date.now())
  const [sintomas, setSintomas] = useState("Cita programada")
  
  const [error, setError] = useState("")
  const [textButton, setTextButton] = useState("Agregar")

  useEffect(()=> {
    if(Object.keys(pacientes).length >0){
      
        setTextButton("Editar")
        setNombre(pacienteEdit.nombre)
        setPropietario(pacienteEdit.propietario)
        setEmail(pacienteEdit.email)
        //setFechaAlta(pacienteEdit.fechaAlta)
        setSintomas(pacienteEdit.sintomas)
    }
  }, [pacienteEdit])



  const generarIdDinamico = ()=>{ 
    const time = Date.now().toString(36)
    const random = Math.random().toString().substring(2)
    return time+random;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if([nombre, propietario, email, fechaAlta, sintomas].includes("")){
      setError("El formulario tiene error")
    }else{

      //tomas lo que tienen los input
      const objPaciente = {
        nombre,
        propietario,
        email,
        fechaAlta,
        sintomas,        
      }

      if(textButton == "Agregar"){
        
        objPaciente.idDinamico = generarIdDinamico()
        setPacientes([...pacientes, objPaciente])  

      }else{
        objPaciente.idDinamico = pacienteEdit.idDinamico
        const LPacientesActualizados = pacientes.map(m=> m.idDinamico === pacienteEdit.idDinamico? objPaciente : m)
        
        setPacientes(LPacientesActualizados)
        setPacienteEdit({})  
        setTextButton("Agregar")
      }

      setError("")
      setNombre("")
      setPropietario("")
      setEmail("")
      //setFechaAlta(Date.now())
      setSintomas("")
      
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-2 ml-0">
      <h2 className="font-black text-center text-lg">Formulario</h2>
      <p className="text-center">Añade pacientes</p>
      
      
      <form onSubmit={handleSubmit} className="bg-slate-300 border-1 shadow-md rounded-lg py-5 px-4 mt-2">
        {error !="" && <Error show={error}/>}
        <div className="mb-3">
          <label htmlFor="nombreMascota" className="mr-2 block uppercase text-gray-700">Nombre Mascota</label>
          <input value={nombre || ""} onChange={(e)=> setNombre(e.target.value)} className="w-full p-2 border-2 placeholder-gray-400 rounded-md" id="nombreMascota" type="text" placeholder="Nombre Mascota"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="nombrePropietario" className="mr-2 block uppercase text-gray-700">Nombre Propietario</label>
          <input value={propietario || ""} onChange={(e)=> setPropietario(e.target.value)} className="w-full p-2 border-2 placeholder-gray-400 rounded-md" id="nombrePropietario" type="text" placeholder="Nombre Propietario"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="mr-2 block uppercase text-gray-700">Email</label>
          <input value={email || ""} onChange={(e)=> setEmail(e.target.value)} className="w-full p-2 border-2 placeholder-gray-400 rounded-md" id="email" type="email" placeholder="Email propietario"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="fechaAlta" className="mr-2 block uppercase text-gray-700">Fecha de Alta</label>
          <input value={new Date(fechaAlta).toISOString().substring(0,10) || ""} onChange={(e)=> setFechaAlta(e.target.value)} className="p-2 border-2 placeholder-gray-400 rounded-md" id="fechaAlta" type="date" ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="sintomas" className="mr-2 block uppercase text-gray-700">Síntomas</label>
          <textarea value={sintomas || ""} onChange={(e)=> setSintomas(e.target.value)} id="sintomas" className="w-full mr-2 block uppercase text-gray-700" placeholder="Describe los síntomas"></textarea>
        </div>
        <div><input type="submit" value={textButton} className="bg-indigo-700 w-full p-3 text-white font-bold uppercase hover:bg-indigo-600 cursor-pointer transition-all" /></div>
      </form>
    </div>
  )
}

export default Formulario