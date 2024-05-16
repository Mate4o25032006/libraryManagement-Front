import useGetData from "../../Hooks/useGetData";
import Card from '../../Components/Card'

function AvailabilityBooks() {
    const data = useGetData(["books/available/true"]);
    const availableBooks = data["books/available/true"];

    return(
        <section className='mx-7'>
            <h1 className=' text-4xl font-semibold  text-center text-[#14A44D]  my-4'>Libros Disponibles</h1>
            <p className='text-lg mb-4'>En esta sección podrás encontrar literatura disponible en nuestra base de datos.</p>
            <article className='flex justify-center gap-4 flex-wrap'>
                {availableBooks?.map(book => (
                    <Card
                        key={book.id}
                        book={book}
                    />
                ))}
            </article>
        </section>
    )
}

export default AvailabilityBooks;
