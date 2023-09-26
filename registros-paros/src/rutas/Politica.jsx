import inocuidad from "../assets/img/inocuidad.jpg"

const Politica = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Política de Inocuidad</h2>
      </div>
      <section className="container flex flex--logo">
        <img className="card" src={inocuidad} alt="" />
      </section>
    </main>
  )
}

export default Politica