import "../styles/MiCuenta.css"
import { Navbar } from "../components/Navbar"
import {Footer} from "../components/Footer"

export function MiCuenta(){
  return(
    <div>
      <Navbar/>
      {/* aqui comienza el contenido de mi cuenta */}
      <div className="container mt-5 cuenta">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
              ESCRITORIO
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              PEDIDOS
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              DESCARGAS
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              DIRECCIONES
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              DETALLES DE LA CUENTA
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              SALIR
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body Hola">
              <h5 className="card-title">Hola revir</h5>
              <p className="card-text">
                ¿no eres revir? <a href="#">Cerrar sesión</a>
              </p>
              <p className="card-text">
                Desde el escritorio de tu cuenta puedes ver tus pedidos recientes, gestionar tus direcciones de envío y facturación y editar tu contraseña y los detalles de tu cuenta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* y aquí termina el contenido de mi cuenta */}
      <Footer/>
    </div>
  )
}