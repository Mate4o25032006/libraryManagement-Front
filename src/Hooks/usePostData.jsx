import axiosInstance from "../Helpers/axiosConfig";
import Swal from "sweetalert2";

const usePostData = (url, onSubmit, inputs) => {
    const aceptSubmit = async () => {
        try {
            await axiosInstance.post(`${import.meta.env.VITE_API_URL}/${url}`, inputs);
            Swal.fire({
                title: "¡Bien!",
                text: "La información ha sido guardada correctamente.",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
            }).then(() => {
                onSubmit();
                // navigate("/login", {
                //     replace: true,
                // });
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Parece que hubo un error: por favor verifique los datos.`,
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
        }
        ).then((result) => {
            if (result.isConfirmed) {
                aceptSubmit()
            }
        })
    }
    return handleSubmit
};
export default usePostData;
