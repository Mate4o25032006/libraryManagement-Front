import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Elements/Inputs";
import useLogin from "../../../Hooks/useLogin";

export const FormLogin = () => {
    const navigate = useNavigate();
    const data = {email : "", password : ""};
    const [inputs, setInputs] = useState(data);
    const Inputs = [
        {
            id: 1,
            type: 'text',
            name: 'email',
            placeholder: 'Ingrese su correo',
            value: data.email,
            required: true
        },
        {
            id: 2,
            type: 'password',
            name: 'password',
            placeholder: 'Ingrese la contraseña',
            value: data.password,
            required: true
        }
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

    const handleSubmit = useLogin("login", onSubmit, inputs);

    return (
        <main className="mt-4 flex justify-center">
            <section className="flex flex-col items-center justify-center bg-slate-200 w-[60%] rounded-lg">
                <h1 className="text-center my-2 mb-8 text-2xl font-semibold">Login de Usuarios</h1>
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
