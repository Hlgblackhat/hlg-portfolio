import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: "ToolCare",
            description: "Plataforma para optimizar la gestión y control de mantenimientos de equipos y herramientas. Desarrollo de nuevas funcionalidades para asegurar adaptabilidad y robustez.",
            tags: ["Gestión", "Mantenimiento", "Full Stack"],
            color: "blue",
            link: "https://toolcare.hlg.codes"
        },
        {
            title: "Blue Papelería Creativa",
            description: "E-Commerce optimizado para SEO y velocidad de carga. Implementación de estrategias de venta para aumentar la visibilidad y conversiones.",
            tags: ["E-Commerce", "SEO", "Web Performance"],
            color: "purple",
            link: "https://www.bluecreativa.com"
        },
        {
            title: "INEDSOR Project",
            description: "Plataforma accesible y atractiva para la exposición de proyectos de robótica realizados por niños sordomudos. Enfocada en usabilidad e inclusión.",
            tags: ["Accesibilidad", "Educación", "Robótica"],
            color: "green", 
            link: "https://inedsor.hlg.codes"
        },
        {
            title: "HlgCodes Organization",
            description: "Organización en GitHub creada para albergar y gestionar proyectos personales, universitarios y de clientes terceros bajo una estructura profesional.",
            tags: ["Open Source", "Gestión de Proyectos", "GitHub"],
            color: "orange",
            link: "https://github.com/HlgCodes"
        }
    ];

    return (
        <section id="projects" className="py-32 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Proyectos destacados.</h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Trabajo realizado para clientes y proyectos personales a través de mi organización HlgCodes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
