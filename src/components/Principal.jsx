import React from 'react';
import '../portada.css';
import hector from '../assets/imagenes/hector.png'
import jose from '../assets/imagenes/jose.png'
import tijeras from '../assets/imagenes/tijeras.png'
import brocha from '../assets/imagenes/brocha.png'
import maquinilla from '../assets/imagenes/maquinilla.png'
import barba from '../assets/imagenes/barba.png'

function App() {
  return (
    <div className="App">
      <section className="seccion1">
        <div className="contenido-central">
          <div>
            <h1 className="rozha_titulo">ESTILO, TÉCNICA <br /> E <br /> INNOVACIÓN</h1>
          </div>
          <br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <div className="horario-rectangulo">
            <p className="blanco">Ancha 43. Sanlúcar, (Cádiz)</p>
            <br />
            <p className="naranja">Lun - Jue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Viernes</p>
            <br />
            <p className="negro">09:00 - 19:30 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 09:00 - 18:00</p>
          </div>
          <p className="barber">BARBER’S 18</p>
        </div>
      </section>
      <section className="seccion2_triangulo">
        <svg viewBox="0 0 100 100">
          <polygon points="0,100 50,85 100,100" className="triangulo_invertido" />
        </svg>
      </section>
      <section className="seccion3">
        <div>
          <p className="pasion">Profesionales llenos de <br /> pasión</p>
          <br /><br /><br /><br /><br /><br />
          <p className="descripcion">Barber’s 18 cuenta con los mejores<br /> profesionales del cuidado del cabello
            del <br /> hombre,<br />
            Artistas llenos de pasión y con muchhos años <br /> de experiencia en el sector, contantemente <br />
            actrualizados en nuevas metodologías. <br /></p>
        </div>
        <div className="container">
          <img className="image1" src={hector} alt="Imagen 1" />
          <img className="image2" src={jose} alt="Imagen 2" />
        </div>
        <div>
          <p className="ofrecemos">Lo que <br /> ofrecemos</p>
          <br /><br /><br /><br /><br /><br /><br />
          <p className="descripcion2">Mucho más que una simple peluquería, que además de ofrecer <br /> servicos básicos,
            intenta cuidar cada detalle para ofrecer sólo lo mejor <br /> a hombres y niños.</p>
          <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div className="logos-container">
          <div>
            <img className="logo_servicios" src={tijeras} alt="Logo 1" />
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text2">Cortar</p>
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text">Nuestros <br /> profesionales le <br /> ayudarán a elegir el <br /> corte más adecuado a
              <br /> su rostro,
              usted podrá <br /> optar por un corte <br /> clásico atemporal de <br /> la vieja escuela o <br /> renovarse
              al completo.
            </p>
          </div>

          <div>
            <img className="logo_servicios" src={brocha} alt="Logo 2" />
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text2">Color</p>
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text">¿Quieres darle color y <br /> alegría a tu cabello? <br /> Contamos con las <br />
              mejores marcas del <br />
              mercado para dar color <br /> al cabello de nuestros <br /> clientes, precios <br /> económicos y
              resultados <br /> fantásticos.
            </p>
          </div>

          <div>
            <img className="logo_servicios" src={maquinilla} alt="Logo 3" />
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text2">Keratina</p>
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text">La keratina es un <br /> auténtico elixir <br /> para el cabello,<br /> hidrata el cuero
              <br /> cabelludo,
              nutre las <br /> raíces y reestructura <br /> los cabellos finos y <br /> quebrados.
            </p>
          </div>

          <div>
            <img className="logo_servicios" src={barba} alt="Logo 4" />
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text2">Barba</p>
            <br /><br /><br /><br /><br /><br />
            <p className="logo-text">Somos conocedores <br /> de las mejores <br /> técnicas para dejar <br /> tu barba como
              de <br /> película,
              contamos <br /> con las mejores <br /> hojas fabricadas en <br /> la pura Italia.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
