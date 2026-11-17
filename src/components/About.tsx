import { Container } from "./ui";

const values = [
  {
    title: "Resultados primero.",
    description:
      "Cada decisión de diseño y de código responde a un objetivo de tu negocio: más contactos, más ventas o menos trabajo manual.",
  },
  {
    title: "Tecnología actual, sin modas.",
    description:
      "Usamos herramientas probadas y modernas. Código limpio y documentado que cualquier equipo puede mantener.",
  },
  {
    title: "Contigo en cada fase.",
    description:
      "Trabajamos codo a codo contigo, con comunicación transparente de principio a fin. Sin sorpresas.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-bg py-24 sm:py-36">
      <Container>
        <h2 className="sr-only">Nosotros</h2>
        <p className="type-headline text-text text-center max-w-[52rem] mx-auto text-balance">
          Somos un estudio pequeño en Madrid. Diseñamos y programamos cada web como si fuera la
          nuestra.
        </p>

        <ul className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {values.map((value) => (
            <li key={value.title} className="border-t border-border pt-6">
              <h3 className="text-[21px] font-semibold tracking-[-0.016em] text-text">
                {value.title}
              </h3>
              <p className="text-[17px] text-text-muted mt-3 text-pretty">{value.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
