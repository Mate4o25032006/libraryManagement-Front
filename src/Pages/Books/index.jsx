import useGetData from '../../Hooks/useGetData'
import Card from '../../Components/Card'

function Books() {
    const { books } = useGetData(["books"])
    return(
        <section className='mx-7'>
            <h1 className=' text-4xl font-semibold  text-center text-[#14A44D]  my-4'>Mí Catálogo de Libros</h1>
            <article className='flex justify-center gap-4 flex-wrap'>
                {books?.map(book => (
                    <Card
                        key={book.id}
                        book={book}
                    />
                ))}
            </article>
        </section>
    )
}
export default Books;