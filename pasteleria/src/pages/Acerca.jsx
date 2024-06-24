import "../styles/Acerca.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "../components/Navbar"
import {Footer} from "../components/Footer"


export function Acerca(){
  return(
    <div>
      <Navbar/>
      {/* aqui comienza el contenido de Acerca */}
      <div>
      <div className="about-valeria">
        <div className="overlay">
          <div className="container">
            <div className="content">
              <h1>VALERIA GONZALES ROBLES</h1>
              <p>
                Valeria González es una talentosa pastelera que estudió en la prestigiosa Escuela de Gastronomía Le Cordon Bleu en París. Desde temprana edad, Valeria mostró una pasión inigualable por la repostería, lo que la llevó a perseguir sus sueños en una de las instituciones culinarias más renombradas del mundo. Durante su formación, no solo perfeccionó sus habilidades técnicas, sino que también desarrolló un estilo único que combina la elegancia francesa con toques de creatividad y modernidad. Ahora, Valeria es conocida por sus exquisitas tartas y postres que deleitan a todos los que tienen la suerte de probarlos.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>NUESTRA REPOSTERÍA TIENE ABIERTA SUS PUERTAS PARA TI</h1>
            <p>
              En nuestra pastelería, nos esforzamos por ofrecerles no solo los mejores postres y tartas, sino también una experiencia única de atención y calidez. Cada una de nuestras creaciones es elaborada con los ingredientes más frescos y de la más alta calidad, reflejando nuestra pasión por la repostería.
            </p>
            <p>
              Nuestro equipo está dedicado a brindar un servicio excepcional, asegurándose de que cada visita sea memorable. Ya sea que vengan a disfrutar de un dulce capricho, a celebrar una ocasión especial, o simplemente a pasar un rato agradable, estamos aquí para hacer que su experiencia sea inigualable.
            </p>
          </div>
          <div className="col-md-6 img-repostera">
            <img src={require("../assets/img/repostera.png")} className="img-fluid" alt="Nuestra Repostería" />
          </div>
        </div>
      </div>
      {/* -------------------CARROUSEL------------------------------- */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="titulo">
    <h1 text-center>TESTIMONIOS</h1>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="testimonial">
        <p>"Los mejores postres que he probado! La tarta de chocolate es simplemente espectacular. Se nota que usan ingredientes de alta calidad y mucho amor en cada creación. Definitivamente, seguiré siendo una clienta fiel."</p>
        <div className="profile">
          <img src={require("../assets/img/Carla.png") } className="profile-img" alt="Testimonio 1" />
          <span>BRUNA BRANCO</span>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="testimonial">
        <p>"Encargué una variedad de cupcakes para el cumpleaños de mi hija y fueron un éxito total. No solo eran preciosos, sino que también sabían increíblemente bien. ¡Todos los invitados quedaron encantados!"</p>
        <div className="profile">
          <img src={require("../assets/img/Brandon.png") } className="profile-img" alt="Testimonio 2" />
          <span>LEON RAMIREZ</span>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="testimonial">
        <p>"Soy fanático del cheesecake y el de aquí es el mejor que he comido. La textura es perfecta y el sabor es increíblemente rico. Además, la atención al cliente es excelente, siempre amables y dispuestos a ayudar."</p>
        <div className="profile">
          <img src={require("../assets/img/moreno.png") } className="profile-img" alt="Testimonio 2" />
          <span>FABIAN ALVARADO</span>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="visually-hidden ">Next</span>
  </button>
</div>
      {/* -------------------------------------------------- */}
    </div>
      {/* aquí termina el contenido de Acerca */}
      <Footer/>
    </div>
  )
}