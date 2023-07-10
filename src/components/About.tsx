import myPhoto from "../img/igor_montezuma_developer.jpeg";

export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="p-4 text-center relative">
        <h2 className="text-blue-900 font-bold relative z-10">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="mr-2 font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="font-headline relative text-sm text-gray-600">
          Tenho mais de 10 projetos criados e gostaria que o próximo seja o seu.
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
      </div>

      <div className="relative mx-auto mt-20 max-w-lg">
        <div
          className="relative w-full rounded-lg bg-blue-100
        p-4 ps-20 md:h-64 md:ps-48"
        >
          <div className="relative h-full w-full rounded-l bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá, </p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Igor
              </span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade
                  </td>
                  <td>22</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular
                  </td>
                  <td>
                    <a
                      href="tel:+5532984666012"
                      className="underline hover:text-blue-800"
                    >
                      +55 32 9.8466-6012
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:igorminranda17@gmail.com"
                      className="underline hover:text-blue-800"
                    >
                      igorminranda17@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://www.google.com/maps/place/Carangola,+MG,+36800-000/@-20.72891,-42.0266303,14z/data=!3m1!4b1!4m6!3m5!1s0xbb7a67035784b5:0xa7d6d220fd1f5b3b!8m2!3d-20.7351246!4d-42.0291428!16s%2Fm%2F03hgfr0?entry=ttu"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      Carangola - MG
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span
                        className="absolute inline-flex h-full w-full
                      animate-ping rounded-full bg-green-400 opacity-75"
                      ></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56">
            <img
              className=" absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"
              src={myPhoto}
              alt="Foto de Perfil"
              title="Foto de Perfil"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
