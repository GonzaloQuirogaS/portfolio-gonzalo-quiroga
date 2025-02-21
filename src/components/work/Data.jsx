import Work1 from "../../assets/gym.png";
import Work2 from "../../assets/library.png";
import Work3 from "../../assets/car.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "API Gimnasio",
    description:
      "API RESTful para gestion de gimnasio basada en arquitectura de microservicios.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "MySQL"],
    link: "https://github.com/GonzaloQuirogaS/gym-app-v2",
  },
  {
    id: 2,
    image: Work2,
    title: "API Ecommerce Libreria",
    description:
      "API RESTful para gestion de operaciones de ecommerce de libros.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT"],
    link: "https://github.com/GonzaloQuirogaS/library_app",
  },
  {
    id: 3,
    image: Work3,
    title: "API Concesionaria",
    description:
      "API RESTful para gestion de operaciones de concesionaria de autos.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/GonzaloQuirogaS/car-dealership",
  },
];
