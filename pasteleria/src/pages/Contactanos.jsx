import "../styles/Contactanos.css"
import {Navbar} from "../components/Navbar"
import {Footer} from "../components/Footer"

export function Contactanos(){
  return(
    <div>
      <Navbar/>
      {/* aquí comienza el contenido de contactanos */}
      <div className="contact-section">
      <div className="container">
        <h2 className="text-center title">Encuéntranos</h2>
        <div className="underline"></div>
        <p className="text-center">
          ¡Nos encantaría saber de ti! Si tienes alguna pregunta, necesitas un pedido especial, o simplemente quieres compartir tu experiencia con nuestras deliciosas creaciones, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte y asegurarnos de que disfrutes al máximo de nuestros productos.
        </p>
        <p className="text-center">
          Puedes enviarnos un mensaje a través del formulario de contacto, llamarnos o escribirnos un correo electrónico. Responderemos lo más pronto posible.
        </p>
        <form className="contact-form">
          <div className="form-row filas">
            <div className="form-group ">
              <input type="text" className="form-control" placeholder="Enter Your Name:" />
            </div>
            <div className="form-group ">
              <input type="text" className="form-control" placeholder="Enter Your Phone:" />
            </div>
            <div className="form-group ">
              <input type="email" className="form-control" placeholder="Enter Your Email:" />
            </div>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="5" placeholder="Enter Your Message Here"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">SEND</button>
          </div>
        </form>
      </div>
    </div>
      {/* aquí termina el contenido de contactanos */}
      <Footer/>
    </div>
  )
}