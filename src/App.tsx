import React, { useState } from "react";
import { HTML_IMAGES, TEAM_MEMBERS, TeamMember } from "./data/projectData";

export default function App() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-background font-body-md text-on-background flex flex-col min-h-screen">
      {/* HEADER BÁSICO Y SOBRIO */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/40">
        <div className="max-w-2xl mx-auto h-16 px-gutter-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              alt="Code Inventors Logo"
              className="h-8 w-8 rounded-lg object-contain shadow-sm"
              src={HTML_IMAGES.headerLogo}
            />
            <span className="font-title-md text-lg text-on-surface font-bold tracking-tight">
              Code Inventors
            </span>
          </div>

          <a
            href="#contacto"
            className="h-9 px-4 rounded-lg bg-primary text-on-primary font-label-sm text-xs font-semibold flex items-center gap-1.5 hover:bg-surface-tint transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Contacto</span>
          </a>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL EN UNA SOLA PÁGINA */}
      <main className="flex-1 w-full pt-20 pb-12 max-w-2xl mx-auto px-gutter-sm">
        {/* 1. HERO & PROPUESTA DE VALOR */}
        <section className="py-space-lg flex flex-col items-center text-center">
          <h1 className="font-headline-lg-mobile text-3xl font-extrabold text-on-surface tracking-tight mb-2">
            Code Inventors
          </h1>

          <p className="font-title-md text-base text-primary font-semibold mb-space-lg">
            App de aprendizaje de Lenguajes de Programación
          </p>

          <div className="bg-surface-container-low border border-outline-variant/40 rounded-2xl p-5 mb-6 text-left w-full shadow-xs">
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              La programación es una habilidad muy valiosa por su versatilidad.
              En la actualidad, con el apoyo de la inteligencia artificial,
              buscar información es más sencillo, pero persiste una gran
              barrera:{" "}
              <strong className="text-on-surface font-semibold">
                muchas personas no cuentan con una laptop o computadora de
                escritorio
              </strong>{" "}
              para practicar.
            </p>
            <div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <p className="font-body-sm text-xs text-on-surface font-medium leading-relaxed">
                <strong className="text-primary font-bold">
                  Nuestra Solución:
                </strong>{" "}
                Fomentar el aprendizaje activo y lúdico directamente desde el
                teléfono móvil, consolidando conocimientos y creando un hábito
                diario sin requerir una PC.
              </p>
            </div>
          </div>

          {/* Imagen principal del teléfono compactada */}
          <div className="w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-md border border-outline-variant/40 bg-surface-container-lowest">
            <img
              alt="Vista de la aplicación"
              className="w-full h-auto object-cover"
              src={HTML_IMAGES.heroPhone}
            />
          </div>
        </section>

        {/* 2. CÓMO FUNCIONA */}
        <section className="py-space-xl border-t border-outline-variant/30">
          <div className="text-center mb-space-lg">
            <h2 className="font-headline-sm text-xl font-bold text-on-surface">
              Cómo Funciona la Solución
            </h2>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              Descripción funcional del flujo de la aplicación.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-fixed font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="font-title-md text-sm font-bold text-on-surface">
                  Perfil y Elección de Lenguajes
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  El estudiante crea su cuenta y selecciona los lenguajes que
                  desea aprender (Python, JavaScript, TypeScript, SQL),
                  estructurados desde nivel básico hasta avanzado.
                </p>
              </div>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-primary-fixed text-on-primary-fixed font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="font-title-md text-sm font-bold text-on-surface">
                  Retos Prácticos en Interfaz Táctil
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Ejercicios dinámicos y un teclado de código adaptado
                  ergonómicamente a pantallas táctiles, facilitando la escritura
                  de sintaxis en el teléfono.
                </p>
              </div>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="font-title-md text-sm font-bold text-on-surface">
                  Tutor Inteligente con IA
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Un asistente que evalúa la sintaxis y la lógica en tiempo
                  real, ofreciendo corrección paso a paso y retroalimentación
                  pedagógica inmediata.
                </p>
              </div>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="font-title-md text-sm font-bold text-on-surface">
                  Gamificación: Esfuerzo y Recompensa
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Puntos de experiencia (XP) y rachas diarias que premian la
                  constancia del estudiante para consolidar el hábito de
                  estudio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. VISTAS EN DISPOSITIVOS (Sin título de 'Capturas') */}
        <section className="py-space-xl border-t border-outline-variant/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-3 shadow-xs">
              <img
                alt="Editor de código"
                className="w-full h-auto rounded-lg object-cover mb-2 border border-outline-variant/20"
                src={HTML_IMAGES.editorCapture}
              />
              <span className="font-label-sm text-xs font-bold text-on-surface block text-center">
                Editor Táctil
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-3 shadow-xs">
              <img
                alt="Ruta de aprendizaje"
                className="w-full h-auto rounded-lg object-cover mb-2 border border-outline-variant/20"
                src={HTML_IMAGES.roadmapCapture}
              />
              <span className="font-label-sm text-xs font-bold text-on-surface block text-center">
                Ruta de Aprendizaje
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-3 shadow-xs">
              <img
                alt="Estadísticas y rachas"
                className="w-full h-auto rounded-lg object-cover mb-2 border border-outline-variant/20"
                src={HTML_IMAGES.statsCapture}
              />
              <span className="font-label-sm text-xs font-bold text-on-surface block text-center">
                Panel de Rachas y XP
              </span>
            </div>
          </div>
        </section>

        {/* 4. ASPECTOS TÉCNICOS */}
        <section className="py-space-xl border-t border-outline-variant/30">
          <div className="text-center mb-space-lg">
            <h2 className="font-headline-sm text-xl font-bold text-on-surface">
              Aspectos Técnicos
            </h2>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              Tecnologías principales utilizadas en el desarrollo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xs">
              <span className="font-label-sm text-xs font-bold text-primary block mb-1">
                Frontend Móvil
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                React Native, Expo, TypeScript y Tailwind CSS para interfaces
                táctiles.
              </p>
            </div>

            <div className="p-3.5 bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xs">
              <span className="font-label-sm text-xs font-bold text-primary block mb-1">
                Tutoría &amp; IA
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Evaluación en tiempo real con arquitectura desacoplada del
                modelo.
              </p>
            </div>

            <div className="p-3.5 bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xs">
              <span className="font-label-sm text-xs font-bold text-primary block mb-1">
                Backend &amp; Base de Datos
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Firebase Firestore, Node.js y MySQL para gestión de usuarios y
                progreso.
              </p>
            </div>

            <div className="p-3.5 bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xs">
              <span className="font-label-sm text-xs font-bold text-primary block mb-1">
                Infraestructura Cloud
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Desplegado en Google Cloud Platform (GCP) con alta
                disponibilidad.
              </p>
            </div>
          </div>
        </section>

        {/* 5. INTEGRANTES DEL EQUIPO (QR MÁS GRANDE) */}
        <section className="py-space-xl border-t border-outline-variant/30">
          <div className="text-center mb-space-lg">
            <h2 className="font-headline-sm text-xl font-bold text-on-surface">
              Integrantes del Equipo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.initials}
                className="p-3.5 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex items-center justify-between gap-3 shadow-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-full ${member.avatarBg} ${member.avatarText} font-bold flex items-center justify-center text-xs shrink-0 shadow-xs`}
                  >
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-title-md text-xs font-bold text-on-surface truncate">
                      {member.name}
                    </h3>
                    <span className="font-body-sm text-[11px] text-on-surface-variant block truncate mt-0.5">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Botón QR más amplio */}
                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-24 h-11 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5 border border-outline-variant/30 shrink-0 cursor-pointer"
                  title={`Ver QR de ${member.name}`}
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    qr_code_2
                  </span>
                  <span className="font-label-sm text-[11px] font-bold text-primary">
                    QR LinkedIn
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CONTACTO Y REPOSITORIOS */}
        <section
          className="py-space-xl border-t border-outline-variant/30"
          id="contacto"
        >
          <div className="text-center mb-space-lg">
            <h2 className="font-headline-sm text-xl font-bold text-on-surface">
              Contacto y Repositorios
            </h2>
          </div>

          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-4 space-y-3 mb-4 shadow-xs">
            <div>
              <span className="font-title-md text-xs font-bold text-on-surface block">
                Correo de contacto:
              </span>
              <a
                href="mailto:contacto@codeinventors.dev"
                className="font-code text-xs text-primary font-bold hover:underline"
              >
                contacto@codeinventors.dev
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              className="flex-1 p-3.5 rounded-xl bg-surface-container-lowest text-xs text-on-surface font-semibold flex items-center justify-between border border-outline-variant/40 hover:bg-surface-container-high transition-colors shadow-xs"
              href="https://github.com/MadeInRodri/learning-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Repositorio Frontend</span>
              <span className="material-symbols-outlined text-[16px] text-primary">
                open_in_new
              </span>
            </a>

            <a
              className="flex-1 p-3.5 rounded-xl bg-surface-container-lowest text-xs text-on-surface font-semibold flex items-center justify-between border border-outline-variant/40 hover:bg-surface-container-high transition-colors shadow-xs"
              href="https://github.com/Bryndroid/backend-dps"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Repositorio Backend</span>
              <span className="material-symbols-outlined text-[16px] text-primary">
                open_in_new
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER SOBRIO */}
      <footer className="py-6 px-gutter-sm text-center border-t border-outline-variant/30 text-xs text-on-surface-variant bg-surface-container-low">
        <p>Code Inventors © 2026 · Proyecto de Aprendizaje Móvil</p>
      </footer>

      {/* MODAL DE QR AMPLIADO Y CÓMODO */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 text-center shadow-2xl"
          >
            <div
              className={`w-14 h-14 mx-auto rounded-full ${selectedMember.avatarBg} ${selectedMember.avatarText} font-bold flex items-center justify-center text-sm shadow-xs mb-3`}
            >
              {selectedMember.initials}
            </div>

            <h3 className="font-title-md text-base font-bold text-on-surface">
              {selectedMember.name}
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mb-4">
              {selectedMember.role}
            </p>

            {/* Contenedor de QR más grande */}
            <div className="w-48 h-48 mx-auto bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/40 flex flex-col items-center justify-center shadow-inner mb-5">
              <span className="material-symbols-outlined text-[140px] text-on-surface">
                qr_code_2
              </span>
              <span className="font-code text-[11px] text-on-surface-variant font-medium mt-1">
                {selectedMember.githubHandle}
              </span>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={() => setSelectedMember(null)}
                className="flex-1 py-2.5 rounded-xl bg-surface-container text-on-surface text-xs font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                Cerrar
              </button>
              <a
                href={selectedMember.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-tint transition-colors"
              >
                <span>Ver Perfil</span>
                <span className="material-symbols-outlined text-[15px]">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
