import CarouselBooks from "../../Components/Carousel"

function Home() {
    return(
        <main className="mt-4 text-center flex flex-col justify-center items-center bg-cream-200 ">
            <h1 className="mb-6 text-4xl font-semibold text-[#14A44D]">
                Vive La Literatura
            </h1>
            <CarouselBooks className='rounded-md shadow-lg hover:shadow-xl transition ease-in-out'/>

            
            <footer className="mt-5 w-full bg-gray-800 text-white p-4 text-sm">
                © 2024 Todos los derechos reservados.
            </footer>
        </main>

    )
}

export default Home