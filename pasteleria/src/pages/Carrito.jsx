import "../styles/Carrito.css"
import { Navbar } from "../components/Navbar"
import {Footer} from "../components/Footer"


export function Carrito(){
  return(
    <div>
      <Navbar />
      {/* esta es la vista de lo que hay en el carrito */}
      <div className="container text-center mt-5 tiste-img bandeja-carrito">
      <img src={require("../assets/img/kariTiste-removebg-preview.png") } alt="Empty Cart"  />
      <h2>¡Tu carrito está actualmente vacío!</h2>
    </div>
      {/* aqui termina la vista del carrito */}
      <Footer />
    </div>
  )
}