import useGetData from "../../Hooks/useGetData";
import Card from '../../Components/Card'

function CategAdventure() {
    const data = useGetData(["books/category/aventura"]);
    const booksAdventure = data["books/category/aventura"];

    return(
        <section className='mx-7'>
            <h1 className=' text-4xl font-semibold  text-center text-[#14A44D]  my-4'>Libros de Aventura</h1>
            <p className='text-lg mb-4'>En esta sección podrás encontrar literatura de Aventura, relatos emocionantes que llevan nuestra imaginación a lugares inimaginables. Encontrarás pilares del género como Julio Verne ETC. </p>
            <article className='flex justify-center gap-4 flex-wrap'>
                {booksAdventure?.map(book => (
                    <Card
                        key={book.id}
                        book={book}
                    />
                ))}
            </article>
        </section>
    )
}

export default CategAdventure;
