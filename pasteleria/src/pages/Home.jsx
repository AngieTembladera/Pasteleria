import "../styles/Home.css"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export function Home(){
  return (
    <div>
    {/* este es el componente que vamos a reutilizar */}
      <Navbar />
      {/* este es la sección donde salen los postres más pedidos de la tienda */}
      {/* este es el div padre */}
      <div className="pedidas"> 
        <h1 className="text-center ">¡LAS MAS PEDIDAS!</h1>
        <p className="text-center m-5">Las preferidas por nustros clientes, encuéntralas en sus diferentes tamnños y sabores.</p>
        {/* y aquí estan el div hijo con sus hijos, en cada div esta un postre y su descripción */}
      <div className="pasteles">
        <div className="cookie">
        <img  src={require("../assets/img/chiskeit.png")} alt=""></img>
        <h2>CHEESECAKE DE CHOCOLATE</h2>
        <p>Es una delicia indulgente con una base crujiente de galletas de chocolate, un relleno cremoso de queso y chocolate fundido, y una cobertura rica de ganache de chocolate. Decorado con virutas de chocolate, este postre es perfecto para cualquier ocasión especial.</p>
        </div>
        <div>
        <img  src={require("../assets/img/paiplatano.png")} alt=""></img>
        <h2>PIE DE MANZANA</h2>
        <p>Cuenta con una corteza dorada y crujiente, rellena de manzanas frescas cocidas con azúcar y canela. Su aroma irresistible y su sabor equilibrado entre dulzura y acidez lo hacen perfecto para cualquier ocasión</p>
        </div>
        <div>
        <img  src={require("../assets/img/macarrones.png")} alt=""></img>
        <h2>PIE DE MANZANA</h2>
        <p>Son delicados y elegantes, con un caparazón crujiente y un relleno cremoso. Disponibles en una variedad de sabores como vainilla, frambuesa y pistacho, son perfectos para cualquier ocasión especial</p>
        </div>
        <div>
        <img  src={require("../assets/img/chocolatecake.png")} alt=""></img>
        <h2>PIE DE MANZANA</h2>
        <p>Es un deleite para los amantes del cacao. Con capas de bizcocho de chocolate húmedo y relleno cremoso, está cubierta con una rica ganache de chocolate y decorada con virutas de chocolate</p>
        </div>
      </div>
      </div>
      {/* aquí termina la sección de las mas pedidas */}
      {/* aquí comienza la sección sobre nosostros */}
      <div className="nosotros" >
      <h1 className="text-center subrayado">SOBRE NOSOTROS</h1>
      <p className="text-center ">¡Bienvenidos a Bake&Bliss, donde cada postre es un sueño hecho realidad!</p>
      <p className="text-center nosotros">Somos expertos en el arte del azúcar con varios años de experiencia. Nuestras tortas no solo son irresistibles visualmente, sino que también ofrecen una explosión de sabores delicados. Desde trufas exquisitas hasta diseños glamorosos, en Bake & Bliss encontrarás la torta perfecta para cualquier ocasión</p>
      </div>
      {/* aqui comienza el footer */}
      <Footer />
    </div>
  )
}