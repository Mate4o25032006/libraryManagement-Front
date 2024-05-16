import useGetData from "../../Hooks/useGetData";
import Card from '../../Components/Card'

function NoAvailabilityBooks() {
    const data = useGetData(["books/available/false"]);
    const noAvailableBooks = data["books/available/false"];

    return(
        <section className='mx-7'>
            <h1 className=' text-4xl font-semibold  text-center text-[#14A44D]  my-4'>Libros No Disponibles</h1>
            <p className='text-lg mb-4'>En esta sección podrás encontrar más literatura, en este caso, libros que en el momento no se encuentran disponibles, pero con paciencia podrás realizar el prestamo de los mismos.</p>
            <article className='flex justify-center gap-4 flex-wrap'>
                {noAvailableBooks?.map(book => (
                    <Card
                        key={book.id}
                        book={book}
                    />
                ))}
            </article>
        </section>
    )
}

export default NoAvailabilityBooks;
