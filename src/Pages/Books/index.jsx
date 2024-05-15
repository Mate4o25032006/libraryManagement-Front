import useGetData from '../../Hooks/useGetData'
import Card from '../../Components/Card'

function Books() {
    const { books } = useGetData(["books"])
    return(
        <section className='mx-7'>
            <h1 className=' text-4xl font-semibold  text-center text-[#14A44D]  my-4'>Catálogo de Libros</h1>
            <p className='text-lg mb-4'>Dentro de nuestra base de datos contamos con una gran cantidad de variedad de obras para todas las edades, desde los más peques explorando la literatura, hasta adultos que buscan el sentido y propósito de su existencia. Te invitamos a explorar </p>
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