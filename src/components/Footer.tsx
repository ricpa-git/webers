const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Desarrollo web", href: "#servicios" },
      { label: "Diseño de interfaces", href: "#servicios" },
      { label: "Tiendas online", href: "#servicios" },
      { label: "SEO y rendimiento", href: "#servicios" },
      { label: "Mantenimiento", href: "#servicios" },
    ],
  },
  {
    title: "Estudio",
    links: [
      { label: "Trabajos", href: "#portfolio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "webersdevia@gmail.com", href: "mailto:webersdevia@gmail.com" },
      { label: "+34 600 000 000", href: "tel:+34600000000" },
    ],
  },
];

// TODO: crear las páginas legales (obligatorias en España) y enlazarlas aquí
const legal = [
  { label: "Política de privacidad", href: "#" },
  { label: "Aviso legal", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-alt text-[12px] leading-[1.35] text-text-muted">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="border-t border-border py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[17px] font-semibold tracking-[-0.02em] text-text">Webers</p>
            <p className="mt-2 max-w-[16rem]">Webs a medida desde Madrid.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-semibold text-text">{col.title}</h2>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-text hover:underline underline-offset-2 break-all sm:break-normal">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>Copyright © {new Date().getFullYear()} Webers. Todos los derechos reservados.</p>
          <ul className="flex gap-0">
            {legal.map((item, i) => (
              <li key={item.label} className={i > 0 ? "border-l border-border pl-3 ml-3" : ""}>
                <a href={item.href} className="hover:text-text hover:underline underline-offset-2">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
