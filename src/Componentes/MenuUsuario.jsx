import '../Imagenes/foto.jpg'
function MenuUsuario(){
    const nombre = 'Rodrigo Romero'
    const rol = 'Aprendiz ADSO'

    return(
        <div className = 'menu-usuario-boton'>
            <button> type = 'button' className = '<menu-usuaio-boton>
                <img src = {fotoperfil} alt = ('foto de ${nombre}') className='
                <span className = 'menu-usuario- datos'>
                    < className = 'menu-usuario-nombre' >{nombre}</span>
                    <span className = 'menu-usuario- rol'> {rol}</span>
                </span>     
                <span className= 'flecha' ></span>
                </button>
                <ul className='menu-desplegable'>
                    <li>< a href= '#'>Mi perfil</a>/li>
                    <li>< a href= '#'>Configuracion</a>/li>
                    <li className = 'separador'></li>
                    <li>< a href= '#'>className='cerrar-sesion' >Cerrar sesion</a>'</li>
                </ul>
                )

     )  </div>
}