import "../components/Navbar.css"

export function Navbar(){
  return(
    <div className="Container">
      <div>
      <nav>
        <ul>
          <img className="Logo subir" src={require("../assets/img/logo.png")} alt=""></img>
          <li className="Logo"><a href="">PASTELERÍA APP WEB</a></li>
          <li><a href="/micuenta">MI CUENTA</a></li>
          <li><a href="/carrito">CARRITO</a></li>
          <li><a href="/Tienda">TIENDA</a></li>
          <li><a href="/contactanos">CONTACNOS</a></li>
          <li><a href="/acerca">ACERCA</a></li>
          <li><a href="/">INCIO</a></li>
        </ul>
      </nav>
      </div>
     <div className="cake">
     <img  src={require("../assets/img/fresasimg.png")} alt=""></img>
     <p className="letras">BAKE&BLISS</p>
     </div>
    </div>
  )
}