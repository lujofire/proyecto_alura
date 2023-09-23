import image from "../assets/img/logo_sasson.png"
import image_cashitas from "../assets/img/cashitas.webp"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Planta Produción</h2>
      </div>
      <section className="container flex flex--logo">
        <article>
          <Link to="/sasson" >
              <img className="reducir_imagen_home" src={image} alt="" />
          </Link>
        </article>
        <article>
          <Link to="/cashitas" >
              <img className="reducir_imagen_home" src={image_cashitas} alt="" />
          </Link>
        </article>

      </section>

    </main>
  )
}

export default Home
