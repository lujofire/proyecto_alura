import image_sasson from "../assets/img/logo_sasson.png"
import image_cashitas from "../assets/img/cashitas.webp"


const Salsas = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Salsas y Aderezos</h2>
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

export default Salsas