import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Elements/Inputs";
import usePostData from "../../../Hooks/usePostData";

export const FormRegister = () => {
    const navigate = useNavigate();
    const data = {userName : "", email : "", password : ""};
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
        console.log(event.target.value);
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = () => {
        // envio de datos
        navigate("/login", { replace: true });
    };

    const handleSubmit = usePostData("register", onSubmit, inputs);

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
