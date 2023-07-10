import { FaQuoteLeft } from "react-icons/fa";
export function Testimonials() {
  return (
    <section className="container mx-auto max-w-4xl p-4 py-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-gray-800">
            Depoimentos de
          </span>
          <span className="font-handwriting text-4xl text-blue-800">
            Companheiros
          </span>
        </h2>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
      </div>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
            Trabalhei com o Igor na Foursys. É uma pessoa com 100% de
            comprometimento naquilo que faz, trabalha muito bem em equipe, busca
            sempre o aprendizado e é muito prestativo. Foi um excelente parceiro
            nos projetos que trabalhamos juntos. Por estas muitas razões eu
            recomendo o Igor como profissional.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://media.licdn.com/dms/image/C5603AQHtlAGtoF_zCQ/profile-displayphoto-shrink_100_100/0/1581462518404?e=1694649600&v=beta&t=fIpW4Fd6MP2L_7PjFeWaOd2LPPUKGFtH7eMp41QcJD0"
            alt="Daiane Fragoso"
          />
          <div className="flex items-center font-headline divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">
              <div className="pr-3 font-medium text-gray-900">
                <a
                  href="https://www.linkedin.com/in/daianefragosodasilveira/"
                  target="_blank"
                  className="underline hover:text-blue-800"
                >
                  Daiane Fragoso
                </a>
              </div>
            </div>
            <div className="pl-3 text-sm font-light text-gray-500">
              via Linkedin
            </div>
          </div>
        </figcaption>
      </figure>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
            Trabalhei com o Igor como desenvolvedor Android no ano de 2022 até
            2023 na empresa Foursys, e posso afirmar que é um excelente
            profissional, comprometido e competente no seu trabalho! Ele foi de
            extrema importância na resoluções dos desafios que enfrentávamos
            durante o desenvolvimento.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQH1trgyzoZj1A/profile-displayphoto-shrink_100_100/0/1682386316148?e=1694649600&v=beta&t=X3T-7uT-i7h-jVnF-6ZvF1m0bPINdXRMVy4SVmxsZ6I"
            alt="Gabriel Farias"
          />
          <div className="flex items-center font-headline divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">
              <a
                href="https://www.linkedin.com/in/gabriel-santos-farias/"
                target="_blank"
                className="underline hover:text-blue-800"
              >
                Gabriel Farias
              </a>
            </div>
            <div className="pl-3 text-sm font-light text-gray-500">
              via Linkedin
            </div>
          </div>
        </figcaption>
      </figure>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
            Uma das características mais impressionantes de Igor é sua
            capacidade excepcional de pensar fora da caixa. Ele possui uma mente
            analítica e uma habilidade notável para identificar obstáculos e
            encontrar soluções eficientes e inovadoras. Durante nossa
            colaboração, enfrentamos diversos desafios técnicos, e Igor
            desempenhou um papel fundamental ao apresentar alternativas
            criativas e eficazes, garantindo o cumprimento dos prazos e a
            entrega de um produto de alta qualidade.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQELgn_8pwwReQ/profile-displayphoto-shrink_100_100/0/1677420025675?e=1694649600&v=beta&t=qdGwTS1kIRwLJIELoG4ltrMstPrU6NPR2vqT54oyLGc"
            alt="Thiago Costa de Jesus"
          />
          <div className="flex items-center font-headline divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">
              <a
                href="https://www.linkedin.com/in/thiagocostadejesus/"
                target="_blank"
                className="underline hover:text-blue-800"
              >
                Thiago Costa de Jesus
              </a>
            </div>
            <div className="pl-3 text-sm font-light text-gray-500">
              via Linkedin
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
