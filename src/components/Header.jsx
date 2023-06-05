
function Header({isFunc}) {

    return (
        <div className="text-center uppercase">
            <h2 className=" text-4xl mr-2">Veterinaria</h2>
            <h4>ConGithub</h4>
            <span className="text-sm">{isFunc("parametro")}</span>
           
        </div>
    )
}

export default Header;