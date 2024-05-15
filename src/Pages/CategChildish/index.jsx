import useGetData from "../../Hooks/useGetData";
import Card from '../../Components/Card'

function CategChildish() {
    const data = useGetData(["books/category/infantil"]);
    const booksChildish = data["books/category/infantil"];

    return(
        <section className='mx-7'>
            <h1 className=' text-4xl font-semibold  text-center text-[#14A44D]  my-4'>Libros Infantiles</h1>
            <p className='text-lg mb-4'>En esta sección podrás encontrar literatura infantil, con obras que llevaran a los más peques a explorar el mundo a través de los libros.</p>
            <article className='flex justify-center gap-4 flex-wrap'>
                {booksChildish?.map(book => (
                    <Card
                        key={book.id}
                        book={book}
                    />
                ))}
            </article>
        </section>
    )
}

export default CategChildish;
