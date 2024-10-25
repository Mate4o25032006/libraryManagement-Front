import CarouselBooks from "../../Components/Carousel"
import { Link } from "react-router-dom"

function Home() {
    return(
        <main className="mx-5 mt-4 flex flex-col justify-center items-center bg-cream-200 ">
            <h1 className="mb-6 text-4xl font-semibold text-[#14A44D]">
                Vive La Literatura
            </h1>

            <CarouselBooks />

            <section className="mt-5">
                <h1 className="text-left mb-6 text-3xl font-semibold text-[#14A44D]">¡Sumérgete en un mundo de historias sin límites!</h1>
                <p>Bienvenido a [POR DEFINIR], tu portal a un universo infinito de libros electrónicos. Aquí podrás explorar miles de títulos en todos los géneros imaginables, desde clásicos atemporales hasta las últimas novedades literarias.</p>

                <h2 className="text-left mb-4 text-2xl font-semibold text-[#14A44D]">¿Eres nuevo en el mundo de la lectura?</h2>
                <ul className="list-disc list-inside">
                    <li>Encuentra libros que se adapten a tus gustos e intereses con nuestro sistema de recomendaciones personalizado.</li>
                    <li>Explora nuestra selección de libros para principiantes y descubre el placer de la lectura.</li>
                    <li>Accede a recursos gratuitos como guías de lectura y resúmenes de libros.</li>
                    <li>Participa en nuestros clubes de lectura virtuales y conoce a otros lectores como tú.</li>
                </ul>

                <button className="mt-4 px-6 py-2 text-white bg-[#14A44D] rounded" >
                    <Link to="/registro">
                        Comienza a explorar
                    </Link>
                </button>
            </section>

        </main>

    )
}

export default Home