import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Elements/Inputs";
import usePostData from "../../../Hooks/usePostData";

export const FormAuthors = () => {
    const navigate = useNavigate();
    const data = { name : "" };
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
        console.log(event.target.value);
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
        <main className="mt-4 flex justify-center">
            <section className="flex flex-col items-center justify-center bg-slate-200 w-[50%] rounded-lg">
                <h1 className="text-center my-2 mb-8 text-2xl font-semibold">Registro de Usuarios</h1>
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
                    <button onClick={handleSubmit} type='submit' className="py-2 px-4 mt-3 rounded-lg bg-[#14a44e76] ">
                        Enviar
                    </button>
                </form>
            </section>
        </main>
    );
};
