import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostData from "../../../Hooks/usePostData";
import Input from "../Elements/Inputs";
import { Forms } from "../../../Layout/Forms";

export const FormAuthors = () => {
    const navigate = useNavigate();
    const data = { name: "" };
    const [inputs, setInputs] = useState(data);
    const Inputs = [
        {
            id: 1,
            type: 'text',
            name: 'name',
            placeholder: 'Ingrese el nombre del autor',
            value: data.name,
            required: true
        },
    ];

    const handleInputChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = () => {
        navigate("/usuario", { replace: true });
    };

    const handleSubmit = usePostData("authors", onSubmit, inputs);

    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-3xl font-semibold text-[#14a44e]">Registro de Autores</h1>
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
                <button onClick={handleSubmit} type='submit' className="w-full py-3 px-4 mt-4 rounded-lg bg-[#14a44e] text-white text-lg font-semibold shadow-md hover:bg-[#0f8a39] transition duration-300">
                    Enviar
                </button>
            </form>
        </Forms>        
    );
};
