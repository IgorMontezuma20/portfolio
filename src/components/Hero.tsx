import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold">
                Igor
              </span>
              <span className="font-headline text-5xl font-light text-blue-400">
                Montezuma
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-blue-800" />
              Desenvolvedor Full-Stack
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-left">
              Sou desenvolvedor de software, com mais de 1 ano de experiência em
              desenvolvimento de códigos robustos para negócios de alto volume e
              com habilidade em diversas linguagens e plataformas. Capaz de
              atuar com excelência em projetos de robustos e obter bons
              resultados. Possuo um perfil inovador, oque me permite encontrar
              boas soluções para desafios.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="#"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
              >
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <a
                href="Igor Montezuma de Miranda Front-End.pdf"
                download="Igor Montezuma de Miranda Front-End.pdf"
                className="button flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <HiDownload />
                Baixe meu CV
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
    </>
  );
}
