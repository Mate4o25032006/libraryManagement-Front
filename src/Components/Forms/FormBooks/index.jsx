import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Elements/Inputs";
import usePostData from "../../../Hooks/usePostData";
import useGetData from "../../../Hooks/useGetData";
import { Select } from "../Elements/Select";

export const FormBooks = () => {
    const navigate = useNavigate();
    const { authors, categories } = useGetData(["authors", "categories"]);



    const initialData = { name: "", description: "", num_pages: "", author: "", category: "" };
    const [inputs, setInputs] = useState(initialData);
    const Inputs = [
        {
            id: 1,
            type: 'text',       
            name: 'name',
            placeholder: 'Ingrese el nombre del libro',
            value: inputs.name,
            required: true
        },
        {
            id: 2,
            type: 'text',
            name: 'description',
            placeholder: 'Ingrese la descripción del libro',
            value: inputs.description,
            required: true
        },
        {
            id: 3,
            type: 'number',
            name: 'num_pages',
            placeholder: 'Ingrese la cantidad de páginas',
            value: inputs.num_pages,
            required: true
        },
    ];

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = () => {
        navigate("/usuario", { replace: true });
    };


    const handleSubmit = usePostData("books", onSubmit, inputs);

    return (
        <main className="mt-4 flex justify-center">
            <section className="flex flex-col items-center justify-center bg-slate-200 w-[50%] rounded-lg">
                <h1 className="text-center my-2 mb-8 text-2xl font-semibold">Registro de Libros</h1>
                <form  onSubmit={handleSubmit} className= "w-[50%] p-3">
                    {Inputs.map(input => (
                        <Input
                            key={input.id}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            handleInputChange={handleInputChange}
                        />
                    ))}
                    <Select
                        label="Autor"
                        name="author"
                        value={inputs.author}
                        onChange={handleInputChange}
                        options={authors?.map(author => ({ value: author.idAuthor, label: author.name }))} 
                    />
                    <Select
                        label="Categoría"
                        name="category"
                        value={inputs.category}
                        onChange={handleInputChange}
                        options={categories?.map(category => ({ value: category.idCategory, label: category.categoryName }))} 
                    />
                    <button onClick={handleSubmit} type='submit' className="py-2 px-4 mt-3 rounded-lg bg-[#14a44e76] ">
                        Enviar
                    </button>
                </form>
            </section>
        </main>
    );
};
