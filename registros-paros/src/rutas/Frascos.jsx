import image_sasson from "../assets/img/logo_sasson.png"
import image_cashitas from "../assets/img/cashitas.webp"


const Frascos = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Linea de Frascos</h2>
      </div>
      <section className="container flex flex--logo">
        <article>
          <img className="img reducir_imagen" src={image_sasson} alt="" />
        </article>
        <article>
          <img className="img reducir_imagen" src={image_cashitas} alt="" />
        </article>
      </section>
    </main>
  )
}

export default Frascos