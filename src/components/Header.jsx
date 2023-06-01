
function Header({isFunc}) {

    return (
        <div className="text-center uppercase">
            <h2 className=" text-4xl ">Veterinaria</h2>
            <span className="text-sm">{isFunc("parametro")}</span>
           
        </div>
    )
}

export default Header;