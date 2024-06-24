import "../components/Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Pastelería App Web</h2>
        <p>
          Tenemos para usted los mejores postres, salidos del horno a sus manos,
          para disfrutarlos en familia, con los amigos o esa persona especial.
        </p>
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h2>Tortas</h2>
        <div className="cake-item">
          <img src={require("../assets/img/mentacake.png")}  alt="Torta Menta y Chocolate" />
          <div>
            <p>Torta, Menta Y Chocolate</p>
            <p>20 de mayo de 2022</p>
          </div>
        </div>
        <div className="cake-item">
          <img src={require("../assets/img/chocolatecereza.png")} alt="Torta De Chocolate Con Cerezas" />
          <div>
            <p>Torta De Chocolate Con Cerezas</p>
            <p>July 20, 2022</p>
          </div>
        </div>
        <div className="cake-item">
          <img src={require("../assets/img/whitecake.png")} alt="Better Sandwich" />
          <div>
            <p>Better Sandwich</p>
            <p>June 20, 2022</p>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h2>Pasteles individuales</h2>
        <ul>
          <li>Limón</li>
          <li>Fresa</li>
          <li>Queso</li>
          <li>Calabaza</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>1, My Address, My Street, New York City, NY, USA</p>
        <p><a href="mailto:contact@domain.com">contact@domain.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;