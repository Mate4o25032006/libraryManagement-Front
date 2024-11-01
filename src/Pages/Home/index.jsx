import CarouselBooks from "../../Components/Carousel";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="mx-5 mt-4 flex flex-col justify-center items-center bg-cream-200">
            <h1 className="mb-6 text-4xl font-semibold text-[#14A44D]">
                Vive La Literatura
            </h1>

            <CarouselBooks />

            <section className="mt-5 max-w-3xl text-center">
                <h1 className="text-left mb-6 text-3xl font-semibold text-[#14A44D]">
                    ¡Sumérgete en un mundo de historias sin límites!
                </h1>
                <p className="mb-4 text-gray-700">
                    Bienvenido a <span className="font-bold text-[#14A44D]">Biblioteca Personal</span>, tu espacio literario donde podrás llevar un registro personalizado de tus lecturas. Con un sistema intuitivo de registro y acceso, podrás organizar tus libros, autores y categorías de forma fácil y rápida.
                </p>

                <h2 className="text-left mb-4 text-2xl font-semibold text-[#14A44D]">Tu espacio literario, personalizado para ti</h2>
                <p className="text-gray-700 mb-6">
                    En <span className="font-bold text-[#14A44D]">Biblioteca Personal</span>, creemos que cada lectura es una aventura única. Por eso, te ofrecemos un espacio para que lleves un registro de tus autores, libros y categorías preferidas, creando así una biblioteca que refleja tu esencia.
                </p>

                <button className="mt-4 px-6 py-2 text-white bg-[#14A44D] rounded hover:bg-[#0e7938] transition duration-300">
                    <Link to="/registro">Comienza a explorar</Link>
                </button>
            </section>
        </main>
    );
}

export default Home;
