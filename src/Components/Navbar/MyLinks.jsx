const links = [
    {
      name : "Inicio",
      href : "/Inicio",
      sublinks: []
    },
    {
      name : "Libros",
      href : "/Libros",
      sublinks: []
    },
    {
      name : "Categorias",
      href : "/Categorias",
      sublinks : [
        { name: "Aventura", link: "/Categories/aventura" },
        { name: "Filosofía", link: "/Categories/filosofia" },
        { name: "Infantil", link: "/Categories/infantil" },
      ]
    },
    {
      name : "Disponibilidad",
      href : "/Disponibilidad",
      sublinks: [
        { name: "Libros Disponibles", link: "/libros/Disponibilidad/disponibles" },
        { name: "Libros no Disponibles", link: "/libros/Disponibilidad/no-disponibles" },
      ]
    },
];

export default links;