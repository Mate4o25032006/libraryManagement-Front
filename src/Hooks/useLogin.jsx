import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from 'react';
import { LibraryContext } from '../Context';

const useLogin = (url, onSubmit, inputs) => {
    const navigate = useNavigate();
    const { setTokenSession } = useContext(LibraryContext); 

    const aceptSubmit = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_AUTH_URL}/${url}`, inputs);
            Swal.fire({
                title: "¡Bien!",
                text: "Ha Iniciado Sesión.",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
            }).then(() => {
                onSubmit();
                setTokenSession(response.data.accessToken);
                navigate("/usuario", {
                    replace: true,
                });
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Parece que hubo un error: Por favor verifique los datos.`,
                confirmButtonColor: "#6fc390",
            });
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        confirmSubmit();
    };

    const confirmSubmit = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Confirma que la información sea correcta.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6fc390',
            cancelButtonColor: '#FF4747',
            confirmButtonText: 'Si, estoy seguro!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                aceptSubmit();
            }
        });
    }

    return handleSubmit;
};

export default useLogin;