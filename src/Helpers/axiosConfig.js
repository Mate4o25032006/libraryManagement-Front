import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor de solicitudes
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para manejar respuestas
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Elimina el token expirado y redirige al login
            localStorage.removeItem('authToken'); // Limpia el token
            window.location.href = '/login'; // Redirige al login
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
