import "../styles/Tienda.css"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export function Tienda(){
  return(
    <div>
        <Navbar/>
        {/* aquí comienza el div donde estara la tienda */}
        <div class="store-header">
        <h1 class="text-start">Tienda</h1>
        <li>
          <p class="seven">Mostrando los 7 resultados</p>
        </li>
        <li class="select">
          <select>
              <option>Orden predeterminado</option>
              {/* <!-- Más opciones aquí --> */}
          </select>
        </li>
    </div>
    <div class="products">
        <div class="product-card">
        <img src={require ("../assets/img/cupcake1.png") } alt="" />
            <div class="product-info">
                <h3>Cupcake de Vainilla</h3>
                <p class="price">S/ 3.00 – S/ 3.50 IGV</p>
                <button><a href="/venta">Seleccionar opciones</a></button>
            </div>
        </div>
        {/* -- ---------------------------------------- - */}
        <div class="product-card">
        <img src={require ("../assets/img/galletas.png") } alt="" />
            <div class="product-info">
                <h3>Galletas de Chocolate</h3>
                <p class="price">S/ 2.00 – S/ 3.00 IGV</p>
                <button>Seleccionar opciones</button>
            </div>
        </div>
       {/* -------------------------------------------- -- */}
        <div class="product-card">
        <img src={require ("../assets/img/zanahoria.png") } alt="" />
            <div class="product-info">
                <h3>Pastel de Zanahoria</h3>
                <p class="price">S/ 40.00 – S/ 43.00 IGV</p>
                <button>Seleccionar opciones</button>
            </div>
        </div>
        {/* -- --------------------------------------------- */}
        <div class="product-card">
            <img src={require ("../assets/img/paicomido.png") } alt="" />
            <div class="product-info">
                <h3>Quiches</h3>
                <p class="price">S/ 6.00 – S/ 8.00 IGV</p>
                <button>Seleccionar opciones</button>
            </div>
        </div>
        {/* <!-- ----------------------------------------- */}
        <div class="product-card">
        <img src={require ("../assets/img/chocoCake.png") } alt="" />
          <div class="product-info">
              <h3>Quiches</h3>
              <p class="price">S/ 6.00 – S/ 8.00 IGV</p>
              <button>Seleccionar opciones</button>
          </div>
      </div>
      {/* -- ---------------------------------------------- */}
      <div class="product-card">
      <img src={require ("../assets/img/yellowcake.png") } alt="" />
        <div class="product-info">
            <h3>Quiches</h3>
            <p class="price">S/ 6.00 – S/ 8.00 IGV</p>
            <button>Seleccionar opciones</button>
        </div>
    </div>
    {/* ------------------------------------------------ */}
    </div>
        <Footer/>
    </div>
  )
}