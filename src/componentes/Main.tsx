import { useRef, useState } from "react";
import {
  LogoReact,
  LogoTypeScript,
  LogoHtml,
  LogoCSS,
  LogoZod,
  LogoReactRouter,
  LogoReactHookForm,
  LogoGit,
  LogoGitHub,
  LogoWordpress,
  LogoEspañol,
  LogoIngles,
  LogoCertificado,
  LogoJavaScript,
  LogoLinkedIn,
  LogoEmail,
  LogoDescarga,
  CircleButton,
  ArrowRight,
  ArrowLeft,
  LogoPostman,
  LogoSQL,
  LogoPlaywright
} from "./Icons"
export function Main() {

  const certificateRef = useRef<HTMLDialogElement>(null);
  const APIQARef = useRef<HTMLDialogElement>(null);
  const QARef = useRef<HTMLDialogElement>(null);
  const [certificate, setCertificate] = useState("");
  const [indexAPIQA, setIndexAPIQA] = useState(0);
  const [indexQA, setIndexQA] = useState(0);


  const openISTQB = () => {
    setCertificate("img/certificado_ISTQB.jpg");
    certificateRef.current?.showModal();
  };

  const openEnglish = () => {
    setCertificate("img/certificado_inglés.jpg");
    certificateRef.current?.showModal();
  };

  const closeModalCertificate = () => {
    certificateRef.current?.close();
  }

  const closeModalEcommerce = () => {
    APIQARef.current?.close();
  }
  const closeModalQuiz = () => {
    QARef.current?.close();
  }

  const openCarruselImagenesEcommerce = () => {
    APIQARef.current?.showModal();
  }

  const opencarruselImagenesProyectoQA = () => {
    QARef.current?.showModal();
  }
  const carruselProyectoAPIQA = [
    'img/pruebas_manuales_API.webp',
    'img/pruebas_Postman.webp',
    'img/codigo_pruebas_API.webp'
  ]

  const carruselProyectoQA = [
    'img/Reporte_Playwright.webp',
    'img/Código.webp',
    'img/Pruebas_manuales.webp'
  ]

  const addIndexAPIQA = () => {
    setIndexAPIQA(indexAPIQA + 1)
  }

  const restAPIQA = () => {
    setIndexAPIQA(indexAPIQA - 1)
  }


  const addIndexQA = () => {
    setIndexQA(indexQA + 1)
  }

  const restIndexQA = () => {
    setIndexQA(indexQA - 1)
  }



  return (
    <main>
      <section className='aboutMe' id="aboutMe">
        <div className="aboutMeComplete">
          <div className='aboutMeLeft'>
            <div>
              <h3 className="aboutMeProfession">QA & Testing | Automatización con Playwright · TypeScript · Postman</h3>
              <h1 className="aboutMeName">Cristóbal Ceppi</h1>
            </div>
            <p className="aboutMeDescription">Soy profesional con formación en programación y experiencia en desarrollo web. Actualmente estoy enfocado en QA y Testing,
              desarrollando proyectos de pruebas funcionales y automatización con Playwright, TypeScript y Postman.</p>
            <div className="aboutMeLocation">
              Santiago, Chile - Disponible remoto, presencial e híbrido
            </div>
            <div className="aboutMeLinks">
              <a className="contactMe" href="#contact">
                <LogoEmail width="1.5rem" height="1.5rem" />
                Hablemos
              </a>
              <a href="upload/CV_Cristóbal_Ceppi.pdf" className="downloadCV" rel="noopener" target="_blank">
                <LogoDescarga width="1.5rem" height="1.5rem" />
                Descargar CV
              </a>
            </div>
          </div>
          <div className="aboutMeRight">
            <picture>
              <img src="img/cristobaCeppi.jpg" alt="Imagen de Cristóbal Ceppi" width="508" height="662" />
            </picture>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div>
          <h2 className="sectionTitle">Proyectos</h2>
        </div>
        <div className="projectsWrapper">
          <div className="individualProject">
            <article>
              <h3 className="projectName">Automatización E2E Automation Labs</h3>
              <div className="projectImageContainer">
                <button className={indexQA === 0 ? "carruselButtonDisabled" : "carruselButton"} onClick={restIndexQA}>
                  <ArrowLeft />
                </button>
                <img src={carruselProyectoQA[indexQA]} alt="Imagen de Automatización de pruebas ecommerce" className="projectImage" onClick={opencarruselImagenesProyectoQA} />
                <button className={indexQA === carruselProyectoQA.length - 1 ? "carruselButtonDisabled" : "carruselButton"} onClick={addIndexQA}>
                  <ArrowRight />
                </button>
              </div>
              <div className="carruselButtons">
                {
                  carruselProyectoQA.map((_, imageIndex) => (
                    <button key={imageIndex} onClick={() => setIndexQA(imageIndex)} className={imageIndex === indexQA ? "active" : "notActive"}>
                      <CircleButton />
                    </button>
                  ))
                }
              </div>
              <p className="projectDescription">Proyecto de QA enfocado en el diseño y ejecución de pruebas funcionales y la automatización de flujos de compra
                en una aplicación ecommerce mediante Playwright y TypeScript.</p>
              <div className="features">
                <h4 className="projectFeature">Características</h4>
                <ul className="featuresList">
                  <li>Diseño y documentación de casos de prueba manuales.</li>
                  <li>Automatización de pruebas E2E con Playwright.</li>
                  <li>Validación de registro, autenticación, filtros, carrito y checkout.</li>
                  <li>Identificación y documentación de defectos.</li>
                  <li>Captura y conservación de evidencias de ejecución.</li>
                </ul>
              </div>
              <div className="projectSkills">
                <div>
                  <h4 className="projectFeature">Tecnologías utilizadas</h4>
                </div>
                <div className="skillsList">
                  <div>
                    <LogoPlaywright width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">Playwright</p>
                  </div>
                  <div>
                    <LogoTypeScript width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">TypeScript</p>
                  </div>
                </div>
              </div>
              <nav className="projectsLinks">
                <div>
                  <a href="https://github.com/cristobalceppi25/proyectoAutomationLabs" rel="noopener" target="_blank">GitHub</a>
                </div>
              </nav>
            </article>
          </div>
          <div className="individualProject">
            <article>
              <h3 className="projectName">Automation Labs – API Testing</h3>
              <div className="projectImageContainer">
                <button className={indexAPIQA === 0 ? "carruselButtonDisabled" : "carruselButton"} onClick={restAPIQA}>
                  <ArrowLeft />
                </button>
                <img src={carruselProyectoAPIQA[indexAPIQA]} alt="Imagen de Automatización de pruebas con Postman y Playwright" className="projectImage" onClick={openCarruselImagenesEcommerce} />
                <button className={indexAPIQA === carruselProyectoAPIQA.length - 1 ? "carruselButtonDisabled" : "carruselButton"} onClick={addIndexAPIQA}>
                  <ArrowRight />
                </button>
              </div>
              <div className="carruselButtons">
                {
                  carruselProyectoAPIQA.map((_, imageIndex) => (
                    <button key={imageIndex} onClick={() => setIndexAPIQA(imageIndex)} className={imageIndex === indexAPIQA ? "active" : "notActive"}>
                      <CircleButton />
                    </button>
                  ))
                }
              </div>
              <p className="projectDescription">Proyecto de QA enfocado en la exploración, documentación y automatización de pruebas de una API REST de e-commerce, utilizando Postman, Playwright y TypeScript.</p>
              <div className="features">
                <h4 className="projectFeature">Características</h4>
                <ul className="featuresList">
                  <li>Exploración de endpoints y documentación del comportamiento de la API.</li>
                  <li>Diseño de casos de prueba funcionales, positivos y negativos.</li>
                  <li>Automatización de 16 pruebas de autenticación, registro y gestión de tokens con Playwright.</li>
                  <li>Validación de códigos HTTP, estructuras JSON, datos y mensajes de error.</li>
                </ul>
              </div>
              <div className="features">
                <h4 className="projectFeature">En desarrollo:</h4>
                <ul className="todoList">
                  <li>Ampliación de la cobertura automatizada.</li>
                  <li>Integración de ejecución continua mediante GitHub Actions.</li>
                </ul>
              </div>
              <div className="projectSkills">
                <div>
                  <h4 className="projectFeature">Tecnologías utilizadas</h4>
                </div>
                <div className="skillsList">
                  <div>
                    <LogoPostman width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">Postman</p>
                  </div>
                  <div>
                    <LogoPlaywright width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">Playwright</p>
                  </div>
                  <div>
                    <LogoTypeScript width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">TypeScript</p>
                  </div>
                </div>
              </div>

              <nav className="projectsLinks">
                <div>
                  <a href="https://github.com/cristobalceppi25/supermercado-ecommerce" rel="noopener" target="_blank">GitHub</a>
                </div>
                <div>
                  <a href="https://supermercado-ecommerce.vercel.app/" rel="noopener" target="_blank">Ver Proyecto</a>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <h2 className="sectionTitle">Experiencia laboral</h2>
        <div className="wrapExperience">
          <article className="individualExperience">
            <aside>
              <p className="experienceDate">Nov 2023 - Abr 2024</p>
              <p className="experienceLocation">Santiago, Chile</p>
            </aside>
            <div>
              <div>
                <h3 className="experienceCompany">Adwise SpA</h3>
              </div>
              <div>
                <h4 className="experiencePosition">Soporte a cliente ecommerce</h4>
              </div>
              <div>
                <ul className="experienceDescription">
                  <li>Desarrollo y mantenimiento de funcionalidades para plataformas ecommerce basadas en Magento (PHP), trabajando mediante un sistema de tickets.</li>
                  <li>Optimización de interfaz y maquetación responsive, mejorando la experiencia de usuario (UX) según los requerimientos del cliente.</li>
                  <li>Gestión y actualización de contenidos en sitios WordPress, asegurando la consistencia visual e integridad del sitio.</li>
                </ul>
              </div>
              <div className="experienceSkills">
                <span className="experienceSkillsTitle">WordPress</span>
                <span className="experienceSkillsTitle">Magento</span>
                <span className="experienceSkillsTitle">PHP</span>
                <span className="experienceSkillsTitle">HTML</span>
                <span className="experienceSkillsTitle">CSS</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="skills" id="skills">
        <div>
          <h2 className="sectionTitle">Habilidades</h2>
        </div>
        <div className="skillsWrapper">
          <div className="individualSkill">
            <div>
              <h3 className="individualSkillTitle">Testing</h3>
            </div>
            <div className="skillsList">
              <div className="individualLanguages">
                <LogoPlaywright width={"3rem"} height={"3rem"} />
                <p>Playwright</p>
              </div>
              <div className="individualLanguages">
                <LogoPostman width={"3rem"} height={"3rem"} />
                <p>Postman</p>
              </div>
            </div>
          </div>

          <div>
            <div className="individualSkill">
              <div >
                <h3 className="individualSkillTitle">Certificados</h3>
              </div>
              <div className="skillsList">
                <div className="certificate">
                  <LogoCertificado width={"3rem"} height={"3rem"} />
                  <a onClick={openISTQB}>ISTQB® Certified Tester Foundation Level (CTFL)</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="individualSkill">
              <div >
                <h3 className="individualSkillTitle">Base de datos</h3>
              </div>
              <div className="individualLanguages">
                <LogoSQL width={"3rem"} height={"3rem"} />
                <p>SQL</p>
              </div>
            </div>
          </div>

          <div className="individualSkill">
            <div>
              <h3 className="individualSkillTitle">Front-End</h3>
            </div>
            <div className="skillsList">
              <div className="individualLanguages">
                <LogoHtml width={"3rem"} height={"3rem"} />
                <p>HTML</p>
              </div>
              <div className="individualLanguages">
                <LogoCSS width={"3rem"} height={"3rem"} />
                <p>CSS</p>
              </div>
              <div className="individualLanguages">
                <LogoReact width={"3rem"} height={"3rem"} />
                <p>React</p>
              </div>
              <div className="individualLanguages">
                <LogoJavaScript width={"3rem"} height={"3rem"} />
                <p>JavaScript</p>
              </div>
              <div className="individualLanguages">
                <LogoTypeScript width={"3rem"} height={"3rem"} />
                <p>TypeScript</p>
              </div>
            </div>
          </div>

          <div className="individualSkill">
            <div>
              <h3 className="individualSkillTitle">Librerías</h3>
            </div>
            <div className="skillsList">
              <div className="individualLanguages">
                <LogoReactRouter width={"3rem"} height={"3rem"} />
                <p>React Router</p>
              </div>
              <div className="individualLanguages">
                <LogoReactHookForm width={"3rem"} height={"3rem"} />
                <p>React Hook Form</p>
              </div>
              <div className="individualLanguages">
                <img src="/zustand-plain.svg" className="zustandImg" alt="Logo Zustand" />
                <p>Zustand</p>
              </div>
              <div className="individualLanguages">
                <LogoZod width={"3rem"} height={"3rem"} />
                <p>Zod</p>
              </div>
            </div>
          </div>

          <div>
            <div className="individualSkill">
              <div >
                <h3 className="individualSkillTitle">Herramientas</h3>
              </div>
              <div className="skillsList">
                <div className="individualLanguages">
                  <LogoGit width={"3rem"} height={"3rem"} />
                  <p>Git</p>
                </div>
                <div className="individualLanguages">
                  <LogoGitHub width={"3rem"} height={"3rem"} />
                  <p>GitHub</p>
                </div>
                <div className="individualLanguages">
                  <LogoWordpress width={"3rem"} height={"3rem"} />
                  <p>WordPress</p>
                </div>
              </div>
            </div>
          </div>



          <div>
            <div className="individualSkill">
              <div>
                <h3 className="individualSkillTitle">Idiomas</h3>
              </div>
              <div className="skillsList">
                <div className="individualLanguages">
                  <LogoEspañol width={"3rem"} height={"3rem"} />
                  <p>Español nativo</p>
                </div>
                <div className="certificate">
                  <LogoIngles width={"3rem"} height={"3rem"} />
                  <a onClick={openEnglish}>Inglés (C2)</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <dialog ref={certificateRef} className="dialog">
        <div className="dialogContent">
          <img src={certificate}
            alt="Certificado"
            className="dialogImage" />
          <button onClick={closeModalCertificate} className="dialogClose">X</button>
        </div>
      </dialog>

      <dialog ref={APIQARef} className="dialogCarrusel">
        <div className="dialogContentCarrusel">
          <img src={carruselProyectoAPIQA[indexAPIQA]}
            alt="Imagenes Proyecto API QA"
            className="dialogImageCarrusel" />
          <button onClick={closeModalEcommerce} className="dialogCloseCarrusel">X</button>
        </div>
        <div className="dialogCarruselButtons">
          {
            carruselProyectoAPIQA.map((_, imageIndex) => (
              <button key={imageIndex} onClick={() => setIndexAPIQA(imageIndex)} className={imageIndex === indexAPIQA ? "dialogActive" : "notActive"}>
                <CircleButton />
              </button>
            ))
          }
        </div>
      </dialog>

      <dialog ref={QARef} className="dialogCarrusel">
        <div className="dialogContentCarrusel">
          <img src={carruselProyectoQA[indexQA]}
            alt="Imagenes Proyecto QA"
            className="dialogImageCarrusel" />
          <button onClick={closeModalQuiz} className="dialogCloseCarrusel">X</button>
        </div>
        <div className="dialogCarruselButtons">
          {
            carruselProyectoQA.map((_, imageIndex) => (
              <button key={imageIndex} onClick={() => setIndexQA(imageIndex)} className={imageIndex === indexQA ? "dialogActive" : "notActive"}>
                <CircleButton />
              </button>
            ))
          }
        </div>
      </dialog>

      <section className="contact" id="contact">
        <h2 className="sectionTitle">Conversemos</h2>
        <p className="contextText">Actualmente busco oportunidades en el área de QA y Testing, donde pueda aplicar mis conocimientos de programación y testing, aportar al equipo y continuar desarrollándome profesionalmente.
          Si crees que mi perfil puede aportar a tu equipo, estaré encantado de conversar.</p>
        <div className="contactWrapper">
          <a href="mailto:cristobalceppi@gmail.com" rel="noopener" target="_blank" >
            <LogoEmail width={"1.5rem"} height={"1.5rem"} />
            cristobalceppi@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/cristobalceppi/" target="_blank" rel="noopener noreferrer">
            <LogoLinkedIn width={"1.5rem"} height={"1.5rem"} />
            LinkedIn
          </a>
          <a href="https://github.com/cristobalceppi25" target="_blank" rel="noopener noreferrer">
            <LogoGitHub width={"1.5rem"} height={"1.5rem"} />
            GitHub
          </a>
        </div>
        <footer className="mainFooter">
          <section className="footerSection">
            <div>
              <p>Diseñado y construido por Cristóbal Ceppi</p>
            </div>
            <div>
              <div className="footerSocials">
                <div className="individualSocial">
                  <a href="mailto:cristobalceppi@gmail.com" target="_blank" rel="noopener noreferrer">
                    <LogoEmail width={"1.5rem"} height={"1.5rem"} />
                  </a>
                </div>
                <div className="individualSocial">
                  <a href="https://www.linkedin.com/in/cristobalceppi/" target="_blank" rel="noopener noreferrer">
                    <LogoLinkedIn width={"1.5rem"} height={"1.5rem"} />
                  </a>
                </div>
                <div className="individualSocial">
                  <a href="https://github.com/cristobalceppi25" target="_blank" rel="noopener noreferrer">
                    <LogoGitHub width={"1.5rem"} height={"1.5rem"} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </section >

    </main >
  )
}

