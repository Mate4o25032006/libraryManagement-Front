import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Elements/Inputs";
import usePostData from "../../../Hooks/usePostData";
import useGetData from "../../../Hooks/useGetData";
import { Select } from "../Elements/Select";

export const FormBooks = () => {
    const navigate = useNavigate();
    const { authors, categories } = useGetData(["authors", "categories"]);



    const initialData = { name: "", description: "", num_pages: "", authorId: "", categoryId: "" };
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
        <main className="mt-8 flex justify-center">
            <section className="flex flex-col items-center justify-center bg-slate-100 w-full max-w-2xl p-8 rounded-xl shadow-lg">
                <h1 className="text-center my-2 mb-8 text-3xl font-semibold text-[#14a44e]">Registro de Libros</h1>
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                    {Inputs.map(input => (
                        <Input
                            key={input.id}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            handleInputChange={handleInputChange}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14a44e]"
                        />
                    ))}
                    <Select
                        label="Autor"
                        name="authorId"
                        value={inputs.authorId}
                        onChange={handleInputChange}
                        options={authors?.map(author => ({ value: author.idAuthor, label: author.name }))}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14a44e]"
                    />
                    <Select
                        label="Categoría"
                        name="categoryId"
                        value={inputs.categoryId}
                        onChange={handleInputChange}
                        options={categories?.map(category => ({ value: category.idCategory, label: category.categoryName }))}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14a44e]"
                    />
                    <button type='submit' className="w-full py-3 px-4 mt-4 rounded-lg bg-[#14a44e] text-white text-lg font-semibold shadow-md hover:bg-[#0f8a39] transition duration-300">
                        Enviar
                    </button>
                </form>
            </section>
        </main>
    );
};
