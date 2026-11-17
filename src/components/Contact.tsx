"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, primaryButton } from "./ui";

const EMAIL = "webersdevia@gmail.com";
const PHONE = "+34 600 000 000";
const PHONE_HREF = "tel:+34600000000";

const projectTypes = ["Web corporativa", "Tienda online", "App web", "Rediseño", "Otro"];

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(field: FieldName, value: string): string | undefined {
  const v = value.trim();
  if (field === "name" && !v) return "Escribe tu nombre.";
  if (field === "email") {
    if (!v) return "Escribe tu email para que podamos responderte.";
    if (!emailPattern.test(v)) return "Escribe un email con el formato nombre@dominio.com.";
  }
  if (field === "message" && v.length < 10)
    return "Cuéntanos un poco más: al menos 10 caracteres.";
  return undefined;
}

const fieldBase =
  "peer w-full rounded-xl border bg-tile-alt px-4 text-[17px] text-text outline-none transition-[border-color,box-shadow] duration-200 focus:border-button focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-button)_20%,transparent)] focus-visible:outline-none";

const labelBase =
  "pointer-events-none absolute left-4 text-text-muted transition-all duration-200 ease-apple top-2.5 text-[12px] peer-placeholder-shown:text-[17px] peer-focus:text-[12px] peer-focus:top-2.5";

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  multiline = false,
  error,
  onBlur,
}: {
  name: FieldName;
  label: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
  onBlur: (name: FieldName, value: string) => void;
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const border = error ? "border-danger" : "border-field-border";
  const common = {
    id,
    name,
    placeholder: " ",
    required: true,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    onBlur: (e: { target: { value: string } }) => onBlur(name, e.target.value),
  };

  return (
    <div>
      <div className="relative">
        {multiline ? (
          <textarea
            {...common}
            rows={5}
            className={`${fieldBase} ${border} resize-none pt-7 pb-3 min-h-36`}
          />
        ) : (
          <input
            {...common}
            type={type}
            autoComplete={autoComplete}
            className={`${fieldBase} ${border} h-14 pt-5`}
          />
        )}
        <label htmlFor={id} className={`${labelBase} peer-placeholder-shown:top-4`}>
          {label}
        </label>
      </div>
      {error && (
        <p id={errorId} className="mt-2 px-1 text-[14px] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [type, setType] = useState(projectTypes[0]);
  const [sent, setSent] = useState(false);

  const handleBlur = (name: FieldName, value: string) => {
    // Solo revalida campos que ya tenían error o que tienen contenido
    if (!value.trim() && !errors[name]) return;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const next: Errors = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };
    setErrors(next);

    const firstInvalid = (Object.keys(next) as FieldName[]).find((k) => next[k]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#field-${firstInvalid}`)?.focus();
      return;
    }

    // Sin backend: prepara el correo en la app de correo del usuario
    const subject = `Nuevo proyecto (${type}): ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.reset();
    setType(projectTypes[0]);
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-bg-alt py-24 sm:py-32">
      <Container>
        <div className="text-center max-w-[40rem] mx-auto mb-14 sm:mb-16">
          <h2 className="type-headline text-text text-balance">Hablemos de tu proyecto.</h2>
          <p className="type-intro text-text-muted mt-4 text-pretty">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas laborables. Sin
            compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-5 max-w-[60rem] mx-auto">
          {/* Formulario */}
          <div className="rounded-[28px] bg-tile-alt p-6 sm:p-10">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.28, 0.11, 0.32, 1] }}
                  className="min-h-[28rem] flex flex-col items-center justify-center text-center"
                  role="status"
                >
                  <div className="w-14 h-14 rounded-full bg-success flex items-center justify-center">
                    <Check aria-hidden className="w-7 h-7 text-bg" strokeWidth={2.5} />
                  </div>
                  <h3 className="type-title text-text mt-6">Mensaje listo.</h3>
                  <p className="text-[17px] text-text-muted mt-3 max-w-[24rem]">
                    Lo hemos abierto en tu app de correo. Envíalo desde allí y te respondemos en
                    menos de 24 horas laborables.
                  </p>
                  <p className="text-[14px] text-text-muted mt-3 max-w-[24rem]">
                    ¿No se ha abierto? Escríbenos a{" "}
                    <a href={`mailto:${EMAIL}`} className="text-link hover:underline underline-offset-4">
                      {EMAIL}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-[17px] text-link hover:underline underline-offset-4"
                  >
                    Escribir otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                >
                  <fieldset>
                    <legend className="text-[17px] font-semibold text-text mb-3">
                      ¿Qué necesitas?
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((t) => (
                        <label
                          key={t}
                          className="cursor-pointer select-none rounded-full border border-field-border px-4 h-10 inline-flex items-center text-[15px] text-text transition-colors duration-200 hover:border-text has-checked:bg-text has-checked:text-bg has-checked:border-text has-focus-visible:outline-2 has-focus-visible:outline-button has-focus-visible:outline-offset-2"
                        >
                          <input
                            type="radio"
                            name="type"
                            value={t}
                            checked={type === t}
                            onChange={() => setType(t)}
                            className="sr-only"
                          />
                          {t}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field name="name" label="Nombre" autoComplete="name" error={errors.name} onBlur={handleBlur} />
                    <Field
                      name="email"
                      label="Email"
                      type="email"
                      autoComplete="email"
                      error={errors.email}
                      onBlur={handleBlur}
                    />
                  </div>
                  <Field
                    name="message"
                    label="Cuéntanos tu proyecto"
                    multiline
                    error={errors.message}
                    onBlur={handleBlur}
                  />

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button type="submit" className={primaryButton}>
                      Enviar mensaje
                    </button>
                    <p className="text-[14px] text-text-muted">
                      Se abrirá tu app de correo con el mensaje preparado.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Datos de contacto */}
          <aside className="rounded-[28px] bg-tile-alt p-6 sm:p-10 flex flex-col">
            <dl className="space-y-6">
              <div>
                <dt className="text-[14px] text-text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${EMAIL}`} className="text-[17px] text-link hover:underline underline-offset-4 break-all">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[14px] text-text-muted">Teléfono</dt>
                <dd className="mt-1">
                  <a href={PHONE_HREF} className="text-[17px] text-link hover:underline underline-offset-4">
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[14px] text-text-muted">Horario</dt>
                <dd className="mt-1 text-[17px] text-text">Lunes a viernes, de 9:00 a 18:00</dd>
              </div>
              <div>
                <dt className="text-[14px] text-text-muted">Estudio</dt>
                <dd className="mt-1 text-[17px] text-text">Madrid, España</dd>
              </div>
            </dl>

            <div className="mt-10 lg:mt-auto pt-6 border-t border-border">
              <p className="text-[17px] font-semibold text-text">¿Es urgente?</p>
              <p className="text-[15px] text-text-muted mt-1">
                Llámanos en horario de oficina y lo vemos en el momento.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
