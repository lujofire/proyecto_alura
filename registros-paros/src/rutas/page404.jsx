import image from "../assets/img/logo_sasson.png"
import '../assets/css/404.css'

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="sasson-image" src={image} alt="Error" />
            <p className="notfound-text">Esta página no existe</p>
        </main>
    )
}

export default Page404
