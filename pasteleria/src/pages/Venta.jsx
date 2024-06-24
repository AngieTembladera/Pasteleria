import "../styles/Venta.css"
import { Navbar } from "../components/Navbar"
import {Footer} from "../components/Footer"


export function Venta(){
  return(
    <div>
      <Navbar />
        {/* aquí comienza la parte del contenido */}
        <div className="container mt-5 lili">
      <button className="btn btn-secondary mb-3" ><a href="/tienda">Regresar</a></button>
      <div className="row">
        <div className="col-md-6 caja-img">
          <img src={require("../assets/img/cupcake1.png") } alt="Cupcake de Vainilla" />
        </div>
        <div className="col-md-6 lolo">
          <h1>Cupcake de Vainilla</h1>
          <h4 className="text-muted">S/ 3.00 – S/ 3.50 IGV</h4>
          <p>Mini pasteles de vainilla.</p>
          <form>
            <div className="form-group">
              <label htmlFor="formTipo">Tipo</label>
              <select className="form-control" id="formTipo">
                <option>Elige una opción</option>
                <option>Opción 1</option>
                <option>Opción 2</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="formCon">Con</label>
              <select className="form-control" id="formCon">
                <option>Elige una opción</option>
                <option>Opción 1</option>
                <option>Opción 2</option>
              </select>
            </div>
            <div className="form-row align-items-end">
              <div className="form-group col-md-2">
                <label htmlFor="formCantidad">Cantidad</label>
                <input type="number" className="form-control" id="formCantidad" defaultValue="1" />
              </div>
              <div className="form-group col-md-10">
                <button type="button" className="btn btn-primary mt-3">Añadir al carrito</button>
              </div>
            </div>
          </form>
          <p className="mt-3">SKU: 00202408 Categoría: Pasteles individuales y cupcakes</p>
        </div>
      </div>
    </div>
        {/* aquí termina la parte del contenido */}
      <Footer/>
    </div>
  )
}