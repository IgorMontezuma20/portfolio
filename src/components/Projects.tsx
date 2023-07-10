import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "Sistemas de venda online com o Back-End feito em NestJs, e o Front-End em ReactJS.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Ufit",
      description:
        "o Ufit é um aplicativo que exibe uma variedade de exercícios físicos e programas de treinamento para usuários de diferentes níveis de aptidão física.",
      image:
        "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://play.google.com/store/apps/details?id=com.app.ufit",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "To-Do",
      description: "Aplicativo de tarefas construído com ReactJs",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "#",
      colSpan: "col-span-1",
    },
  ];

  return (
    <section
      className="rounded-tlt-[80px] bg-gradient-to-tr
     from-black to-gray-900 text-white md:rounded-tl-[180px]"
    >
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos &
            </span>
            <span className="font-handwriting text-4xl">Portifólio</span>
          </h2>
          <p className="relative text-sm font-headline text-gray-400">
            Alguns projetos que construí ao longo da minha carreira como
            desenvolvedor.
          </p>
          <div
            className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded
           bg-blue-400/10"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              className={`group relative h-52
               cursos-default rounded-lg ${project.colSpan} bg-cover bg-center`}
              key={`project-${index}`}
              style={{ backgroundImage: `url('${project.image})` }}
            >
              <div
                className="absolute inset-0 flex h-full w-full flex-col items-center justify-center
           rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                <h4 className="">{project.title}</h4>
                <p className="mb-4 text-sm">{project.description}</p>
                <a href={project.link} target="_blank">
                  <HiArrowTopRightOnSquare className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
