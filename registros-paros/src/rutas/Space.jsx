import image from "../assets/img/logo_sasson.png"
import image_cashitas from "../assets/img/cashitas.webp"

const Space = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Space</h2>
      </div>

      <section className="container flex flex--logo">
        <article>
          <img className="img reducir_imagen" src={image} alt="" />
        </article>
        <article>
          <img className="img reducir_imagen" src={image_cashitas} alt="" />
        </article>
      </section>

    </main>
  )
}

export default Space