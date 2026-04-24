// "use client";

// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Laura García",
//     role: "CEO",
//     company: "TechFlow",
//     content:
//       "Webers transformó nuestra visión en una plataforma increíble. El equipo entendió nuestras necesidades desde el primer día y entregaron un producto que superó nuestras expectativas.",
//     rating: 5,
//     initial: "LG",
//   },
//   {
//     name: "Carlos Martínez",
//     role: "Fundador",
//     company: "GreenMarket",
//     content:
//       "La tienda online que nos desarrollaron ha triplicado nuestras ventas. El diseño es espectacular y la experiencia de usuario es impecable.",
//     rating: 5,
//     initial: "CM",
//   },
//   {
//     name: "Ana López",
//     role: "Directora",
//     company: "UrbanStudio",
//     content:
//       "Profesionalidad, creatividad y rapidez. Nuestra web es ahora nuestra mejor carta de presentación. Totalmente recomendables.",
//     rating: 5,
//     initial: "AL",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section id="testimonios" className="py-28 bg-bg overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-16"
//         >
//           <span
//             className="text-[11px] text-primary/60 tracking-[0.2em] uppercase block mb-4"
//             style={{ fontFamily: "var(--font-ibm-mono)" }}
//           >
//             05 / Testimonios
//           </span>
//           <h2
//             className="text-4xl sm:text-5xl font-bold text-text"
//             style={{ fontFamily: "var(--font-syne)" }}
//           >
//             Lo que dicen
//             <br />
//             nuestros clientes.
//           </h2>
//         </motion.div>

//         {/* Testimonial cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/20">
//           {testimonials.map((testimonial, i) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="relative bg-bg p-8 sm:p-10 group hover:bg-surface/50 transition-colors duration-300"
//             >
//               {/* Large decorative quote */}
//               <div
//                 className="text-[6rem] font-bold leading-none text-primary/[0.07] select-none absolute top-4 right-6"
//                 style={{ fontFamily: "var(--font-syne)" }}
//                 aria-hidden
//               >
                
//               </div>

//               {/* Stars */}
//               <div className="flex gap-1 mb-6">
//                 {Array.from({ length: testimonial.rating }).map((_, j) => (
//                   <svg
//                     key={j}
//                     className="w-3.5 h-3.5 fill-amber-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                 ))}
//               </div>

//               {/* Content */}
//               <p className="text-text-muted leading-relaxed text-[15px] mb-8 relative z-10">
//                 &ldquo;{testimonial.content}&rdquo;
//               </p>

//               {/* Author */}
//               <div className="flex items-center gap-4 pt-6 border-t border-border/20">
//                 <div
//                   className="w-10 h-10 bg-surface-light border border-border/40 flex items-center justify-center text-primary text-xs font-bold shrink-0"
//                   style={{ fontFamily: "var(--font-ibm-mono)" }}
//                 >
//                   {testimonial.initial}
//                 </div>
//                 <div>
//                   <div
//                     className="text-sm font-bold text-text"
//                     style={{ fontFamily: "var(--font-syne)" }}
//                   >
//                     {testimonial.name}
//                   </div>
//                   <div
//                     className="text-xs text-text-muted/60"
//                     style={{ fontFamily: "var(--font-ibm-mono)" }}
//                   >
//                     {testimonial.role} · {testimonial.company}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom stat */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-16 flex items-center justify-center gap-6"
//         >
//           <div className="h-px w-24 bg-border/30" />
//           <span
//             className="text-sm text-text-muted/50"
//             style={{ fontFamily: "var(--font-ibm-mono)" }}
//           >
//             98% de clientes satisfechos
//           </span>
//           <div className="h-px w-24 bg-border/30" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
