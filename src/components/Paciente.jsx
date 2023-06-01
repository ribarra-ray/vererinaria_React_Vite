

const Paciente = ({objPaciente, setPacienteEdit, fEliminarPaciente}) => {

const Editar = (e)=>{
  setPacienteEdit(objPaciente)
}

const Eliminar = ()=>{
  if(confirm("Desea Eliminar el paciente: "+ objPaciente.nombre + " ?")){
    fEliminarPaciente(objPaciente.idDinamico)
  }
}

  return (
    <div className="mt-2 bg-white shadow-md px-5 py-5 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase mr-2">Nombre: 
    <span className="font-normal normal-case mr-2">{objPaciente.nombre}  </span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase mr-2">Propietario:
    <span className="font-normal normal-case mr-2">{objPaciente.propietario}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase mr-2">email:
    <span className="font-normal normal-case mr-2">{objPaciente.email}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase mr-2">Fecha de Alta:
    <span className="font-normal normal-case mr-2">{objPaciente.fechaAlta !=""? new Date(objPaciente.fechaAlta).toLocaleString()  : "" }</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase mr-2">Síntomas:
    <span className="font-normal normal-case mr-2">{objPaciente.sintomas}</span></p>
    <div>
      <button onClick={Editar} className="mr-5 py-2 px-5 bg-indigo-700 hover:bg-indigo-600 text-white  rounded-md">Editar</button>
      <button onClick={Eliminar} className="py-2 px-5 bg-red-500 hover:bg-red-400 text-white rounded-md">Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente