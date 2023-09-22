import image from "../assets/img/politica.jpg"


const Politica = () => {
    return (
      <main>
        <div className="container">
          <h2 className="title-page">Política de Inocuidad</h2>
        </div>
        <section className="container flex flex--center">
          <article className="card">
            <img src={image} alt="" />
          </article>
        </section>
      </main>
    )
  }
  
  export default Politica