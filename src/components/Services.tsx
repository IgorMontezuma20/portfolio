import {
  HiCommandLine,
  HiComputerDesktop,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next,js, HTML5 e CSS3.",
      icon: <HiComputerDesktop classname="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description:
        "Desenvolvimento de sistemas e APIs REST com Node.js e SpringBoot.",
      icon: <HiCommandLine classname="h-12 w-12" />,
    },
    {
      title: "Mobile",
      description: "Desenvolvimento de aplicativos Android e Ios.",
      icon: <HiDevicePhoneMobile classname="h-12 w-12" />,
    },
  ];

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center relative">
        <p className="text-sm font-semibold uppercase text-blue-600 relative">
          Oque faço de melhor
        </p>

        <h2 className="mb-2 font-bold text-blue-900 z-10 relative">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>

        <p className="font-headline text-sm text-gray-600 relative">
          Posso atender uma gama completa de serviços, do front-end ao back-end
          com banco de dados e sistemas.
        </p>
        <div className="absolute left-1/2 mt-1 top-8 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
      </div>

      <div className="mt-6 flex felx-col gap-2 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2 ">{service.icon}</div>
            <div className="text-xl font-bold font-headline">
              {service.title}
            </div>
            <div className="text-sm font-headline">{service.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
