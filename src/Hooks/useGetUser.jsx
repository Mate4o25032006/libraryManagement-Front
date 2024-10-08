import { useContext, useEffect, useState } from "react";
import { LibraryContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../Helpers/axiosConfig";

const useGetUser = () => {
    const navigate = useNavigate();
    const { tokenSession, setAdmin } = useContext(LibraryContext);
    const [adminSession, setAdminSession] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`${import.meta.env.VITE_API_AUTH_URL}/users`, {
                    headers: {
                        "Authorization": `Bearer ${tokenSession}`
                    }
                });
                setAdmin(true);
                setAdminSession(true);
                console.log(response);
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: "Oops....",
                    text: "No tienes Autorización para entrar a este apartado. Por favor inicie sesión.",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2500,
                }).then(() => {
                    setAdmin(false);
                    setAdminSession(false);
                    navigate("/login", {
                        replace: true
                    });
                });
            }
        };
        fetchData();
    }, [tokenSession, setAdmin, navigate]); 
    return adminSession;
};

export default useGetUser;
