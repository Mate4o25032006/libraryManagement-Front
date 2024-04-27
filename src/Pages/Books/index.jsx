import useGetData from '../../Hooks/useGetData'
import Card from '../../Components/Card'

function Books() {
    const { books } = useGetData(["books"])
    return(
        <section className='flex flex-row '>
            <h1 className='font-bold text-3xl text-center text-[#14A44D] '>Hola desde libros</h1>
            {books?.map(data => (
                <Card
                     key={data.id}
                    data={data}
                />
            ))}
        </section>
    )
}
export default Books;