import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPacienteEdit, fEliminarPaciente}) => {



  //en un listado obligado debes pasar un key  
  return (
    <div className="md:w-1/2 lg: 3/5 m-2 mr-0 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-lg" >ListadoPacientes</h2>
          <p className="text-center"><span>Administra tus pacientes y citas</span></p>
          <div className="md:h-screen  overflow-y-scroll">
            {pacientes.map(m=>(<Paciente objPaciente={m} key={m.idDinamico} setPacienteEdit={setPacienteEdit} fEliminarPaciente={fEliminarPaciente}/>))} 
          </div>
        </>
      ) : (

        <>
          <h2 className="font-black text-center text-lg" >No hay pacientes ingresados</h2>
          
        </>
      )}
    </div>
  )
}

export default ListadoPacientes