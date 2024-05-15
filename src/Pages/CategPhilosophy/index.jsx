import useGetData from "../../Hooks/useGetData";
import Card from '../../Components/Card'

function CategPhilosophy() {
    const data = useGetData(["books/category/filosofia"]);
    const booksPhilosophy = data["books/category/filosofia"];

    return(
        <section className='mx-7'>
            <h1 className=' text-4xl font-semibold  text-center text-[#14A44D]  my-4'>Libros de Filosofía</h1>
            <p className='text-lg mb-4'>En esta sección encontrarás el conocimiento de mentes brillantes que hicieron un gran aporte al pensamiento humano. Sumergete en el mundo de la filosofía y descubre una nueva manera de pensar y vivir. </p>
            <article className='flex justify-center gap-4 flex-wrap'>
                {booksPhilosophy?.map(book => (
                    <Card
                        key={book.id}
                        book={book}
                    />
                ))}
            </article>
        </section>
    )
}

export default CategPhilosophy;
