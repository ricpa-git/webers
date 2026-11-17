import { Globe, Palette, Search, ShoppingCart, Smartphone, Wrench } from "lucide-react";
import { ChevronLink, Container } from "./ui";

type Service = {
  icon: typeof Globe;
  title: string;
  description: string;
  /** Clases de rejilla: define la jerarquía de cada tarjeta */
  span: string;
  large?: boolean;
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Desarrollo web a medida",
    description:
      "Webs rápidas, seguras y escalables, programadas desde cero para lo que tu negocio necesita. Sin plantillas.",
    span: "md:col-span-2",
    large: true,
  },
  {
    icon: Palette,
    title: "Diseño de interfaces",
    description: "Pantallas claras que guían a tus visitantes hasta contactar o comprar.",
    span: "",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas online",
    description: "Catálogo, pagos y envíos integrados, pensados para vender más.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "Apps web",
    description: "Se instalan y funcionan como una app nativa, en cualquier dispositivo.",
    span: "",
  },
  {
    icon: Search,
    title: "SEO y rendimiento",
    description: "Carga en menos de un segundo y aparece cuando te buscan.",
    span: "",
  },
];

function ServiceTile({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <li
      className={`rounded-[28px] bg-tile p-8 sm:p-10 flex flex-col ${
        service.large ? "min-h-[22rem] justify-between" : "min-h-[17rem]"
      } ${service.span}`}
    >
      <Icon
        aria-hidden
        strokeWidth={1.5}
        className={service.large ? "w-11 h-11 text-text" : "w-8 h-8 text-text"}
      />
      <div className={service.large ? "max-w-[30rem]" : "mt-auto pt-10"}>
        <h3
          className={
            service.large
              ? "type-headline text-text text-balance"
              : "type-title text-text text-balance"
          }
        >
          {service.title}
        </h3>
        <p className={`text-text-muted mt-3 ${service.large ? "type-intro" : "text-[17px]"}`}>
          {service.description}
        </p>
      </div>
    </li>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="bg-bg py-24 sm:py-32">
      <Container>
        <div className="text-center max-w-[44rem] mx-auto mb-14 sm:mb-16">
          <h2 className="type-headline text-text text-balance">Todo lo que tu web necesita.</h2>
          <p className="type-intro text-text-muted mt-4 text-pretty">
            Un solo equipo para diseñarla, programarla y mantenerla al día.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => (
            <ServiceTile key={service.title} service={service} />
          ))}

          {/* Mantenimiento: tarjeta horizontal que cierra la rejilla */}
          <li className="md:col-span-2 lg:col-span-3 rounded-[28px] bg-tile p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <Wrench aria-hidden strokeWidth={1.5} className="w-8 h-8 text-text shrink-0" />
            <div className="flex-1">
              <h3 className="type-title text-text">Mantenimiento</h3>
              <p className="text-[17px] text-text-muted mt-2 max-w-[36rem]">
                Actualizaciones, copias de seguridad y mejoras continuas para que tu web nunca se
                quede atrás.
              </p>
            </div>
            <ChevronLink href="#contacto">Pedir presupuesto</ChevronLink>
          </li>
        </ul>
      </Container>
    </section>
  );
}
