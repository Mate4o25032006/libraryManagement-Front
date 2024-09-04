import React from 'react'
import useGetUser from '../../Hooks/useGetUser';
import FormCard from '../../Components/FormCard';
import { useNavigate } from 'react-router-dom';

export const User = () => {

    const forms = [
        {
            id: 1,
            titulo: 'Formulario Autores',
            descripcion: 'Registro de autores en el sistema',
            ruta: '/formularios/autores'
        },
        {
            id: 2,
            titulo: 'Formulario Categorias',
            descripcion: 'Registro de categorias en el sistema',
            ruta: '/formularios/categorias'
        },
        {
            id: 3,
            titulo: 'Formulario libros',
            descripcion: 'Registro de libros en el sistema',
            ruta: '/formularios/libros'
        },
    ]

    const navigate = useNavigate();
    const user = useGetUser();

    return (
        <>
            {user ?
                <main className='m-4 p-4 flex items-center justify-center flex-col'>
                    <h1 className='font-semibold'>Bienvenido al Panel de Usuario</h1>
                    <section className='flex gap-4 mt-4'>
                        {
                            forms.map(form => (
                                <FormCard
                                    key={form.id}
                                    titulo={form.titulo}
                                    descripcion={form.descripcion}
                                    ruta={form.ruta}
                                />
                            ))
                        }
                    </section>
                </main>
                
            : ""}
        </>
    )
}
