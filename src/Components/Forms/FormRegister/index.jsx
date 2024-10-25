import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Elements/Inputs";
import usePostData from "../../../Hooks/usePostData";

export const FormRegister = () => {
    const navigate = useNavigate();
    const data = { userName: "", email: "", password: "" };
    const [inputs, setInputs] = useState(data);
    const Inputs = [
        {
            id: 1,
            type: 'text',
            name: 'userName',
            placeholder: 'Ingrese un nombre de Usuario',
            value: data.userName,
            required: true
        },
        {
            id: 2,
            type: 'text',
            name: 'email',
            placeholder: 'Ingrese su correo',
            value: data.email,
            required: true
        },
        {
            id: 3,
            type: 'password',
            name: 'password',
            placeholder: 'Ingrese su contraseña',
            value: data.password,
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
        navigate("/login", { replace: true });
    };

    const handleSubmit = usePostData("auth/register", onSubmit, inputs);

    return (
        <main className="mt-8 flex justify-center">
            <section className="flex flex-col items-center justify-center bg-slate-100 w-full max-w-md p-8 rounded-xl shadow-lg">
                <h1 className="text-center my-2 mb-8 text-3xl font-semibold text-[#14a44e]">Registro de Usuarios</h1>
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
            </section>
        </main>
    );
};
