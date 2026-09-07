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
  ArrowLeft
} from "./Icons"
export function Main() {

  const certificateRef = useRef<HTMLDialogElement>(null);
  const ecommerceRef = useRef<HTMLDialogElement>(null);
  const quizRef = useRef<HTMLDialogElement>(null);
  const [certificate, setCertificate] = useState("");
  const [indexCommerce, setIndexCommerce] = useState(0);
  const [indexQuiz, setIndexQuiz] = useState(0);


  const openISTQB = () => {
    setCertificate("/img/certificado_ISTQB.jpg");
    certificateRef.current?.showModal();
  };

  const openEnglish = () => {
    setCertificate("/img/certificado_inglés.jpg");
    certificateRef.current?.showModal();
  };

  const closeModalCertificate = () => {
    certificateRef.current?.close();
  }

  const closeModalEcommerce = () => {
    ecommerceRef.current?.close();
  }
  const closeModalQuiz = () => {
    quizRef.current?.close();
  }

  const openCarruselImagenesEcommerce = () => {
    ecommerceRef.current?.showModal();
  }

  const opencarruselImagenesQuiz = () => {
    quizRef.current?.showModal();
  }
  const carruselImagenesEcommerce = [
    'img/Home_Ecommerce.webp',
    '/img/Cart_Ecommerce.webp',
    'img/Checkout_Ecommerce.webp'
  ]

  const carruselImagenesQuiz = [
    'img/Home_Quiz.webp',
    'img/Quiz_Question_Answer.webp',
    'img/Quiz_EndCharacter.webp'
  ]

  const addIndexCommerce = () => {
    setIndexCommerce(indexCommerce + 1)
  }

  const restIndexCommerce = () => {
    setIndexCommerce(indexCommerce - 1)
  }


  const addIndexQuiz = () => {
    setIndexQuiz(indexQuiz + 1)
  }

  const restIndexQuiz = () => {
    setIndexQuiz(indexQuiz - 1)
  }



  return (
    <main>
      <section className='aboutMe' id="aboutMe">
        <div className="aboutMeComplete">
          <div className='aboutMeLeft'>
            <div>
              <h3 className="aboutMeProfession">Desarrollador Web | React · TypeScript · QA & Testing</h3>
              <h1 className="aboutMeName">Cristóbal Ceppi</h1>
            </div>
            <p className="aboutMeDescription">Soy profesional con formación en programación y experiencia en desarrollo y mantenimiento de aplicaciones web. Actualmente estoy orientando mi perfil hacia QA y Testing, fortaleciendo mis conocimientos en pruebas funcionales, APIs REST, SQL y herramientas como Postman.</p>
            <p className="aboutMeDescription">Mi experiencia en desarrollo Front-End y los proyectos que he realizado con React y TypeScript me han permitido comprender desde una perspectiva técnica cómo funcionan las aplicaciones web y sus distintas funcionalidades.</p>
            <p className="aboutMeDescription">Actualmente busco una oportunidad como QA Trainee donde pueda aplicar mis conocimientos de programación y testing, seguir aprendiendo y desarrollarme profesionalmente en el área de calidad de software.</p>
            <div className="aboutMeLocation">
              Santiago, Chile - Disponible remoto, presencial e híbrido
            </div>
            <div className="aboutMeLinks">
              <a className="contactMe" href="#contact">
                <LogoEmail width="1.5rem" height="1.5rem" />
                Hablemos
              </a>
              <a href="/upload/CV_Cristóbal_Ceppi.pdf" className="downloadCV" rel="noopener" target="_blank">
                <LogoDescarga width="1.5rem" height="1.5rem" />
                Descargar CV
              </a>
            </div>
          </div>
          <div className="aboutMeRight">
            <picture>
              <img src="/img/cristobaCeppi.jpg" alt="Cristobal Ceppi" width="508" height="662" />
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
              <h3 className="projectName">Supermercado E-commerce</h3>
              <div className="projectImageContainer">
                <button className={indexCommerce === 0 ? "carruselButtonDisabled" : "carruselButton"} onClick={restIndexCommerce}>
                  <ArrowLeft />
                </button>
                <img src={carruselImagenesEcommerce[indexCommerce]} className="projectImage" onClick={openCarruselImagenesEcommerce} />
                <button className={indexCommerce === carruselImagenesEcommerce.length - 1 ? "carruselButtonDisabled" : "carruselButton"} onClick={addIndexCommerce}>
                  <ArrowRight />
                </button>
              </div>
              <div className="carruselButtons">
                {
                  carruselImagenesEcommerce.map((_, imageIndex) => (
                    <button key={imageIndex} onClick={() => setIndexCommerce(imageIndex)} className={imageIndex === indexCommerce ? "active" : "notActive"}>
                      <CircleButton />
                    </button>
                  ))
                }
              </div>
              <p className="projectDescription">Aplicación eCommerce desarrollada con React y TypeScript que permite administrar un flujo completo de compra.</p>
              <div className="features">
                <h4 className="projectFeature">Características</h4>
                <ul className="featuresList">
                  <li>Catálogo de productos.</li>
                  <li>Carrito de compras con Zustand.</li>
                  <li>Checkout hecho con React Hook Form y validado con Zod.</li>
                  <li>Diseño responsive.</li>
                  <li>Paginación.</li>
                  <li>Búsqueda dinámica.</li>
                </ul>
              </div>
              <div className="projectSkills">
                <div>
                  <h4 className="projectFeature">Tecnologías usadas</h4>
                </div>
                <div className="skillsList">
                  <div>
                    <LogoHtml width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">Html</p>
                  </div>
                  <div>
                    <LogoCSS width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">CSS</p>
                  </div>
                  <div>
                    <LogoReact width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">React</p>
                  </div>
                  <div>
                    <LogoTypeScript width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">TypeScript</p>
                  </div>
                  <div>
                    <LogoZod width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">Zod</p>
                  </div>
                  <div>
                    <img src="/zustand-plain.svg" className="zustandImg" />
                    <p className="projectIndividualSkills">Zustand</p>
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
          <div className="individualProject">
            <article>
              <h3 className="projectName">Quiz de Detective Conan</h3>

              <div className="projectImageContainer">
                <button className={indexQuiz === 0 ? "carruselButtonDisabled" : "carruselButton"} onClick={restIndexQuiz}>
                  <ArrowLeft />
                </button>
                <img src={carruselImagenesQuiz[indexQuiz]} className="projectImage" onClick={opencarruselImagenesQuiz} />
                <button className={indexQuiz === carruselImagenesQuiz.length - 1 ? "carruselButtonDisabled" : "carruselButton"} onClick={addIndexQuiz}>
                  <ArrowRight />
                </button>
              </div>
              <div className="carruselButtons">
                {
                  carruselImagenesQuiz.map((_, imageIndex) => (
                    <button key={imageIndex} onClick={() => setIndexQuiz(imageIndex)} className={imageIndex === indexQuiz ? "active" : "notActive"}>
                      <CircleButton />
                    </button>
                  ))
                }
              </div>
              <p className="projectDescription">Aplicación web desarrollada con React y TypeScript que implementa un sistema de preguntas interactivo con gestión de estado, temporizador y resultados personalizados según el desempeño del usuario.</p>
              <div className="features">
                <h4 className="projectFeature">Características</h4>
                <ul className="featuresList">
                  <li>Sistema de preguntas interactivo.</li>
                  <li>Temporizador por partida.</li>
                  <li>Gestión de estado con Zustand.</li>
                  <li>Resultados personalizados según el puntaje.</li>
                  <li>Diseño responsive.</li>
                  <li>Navegación entre preguntas.</li>
                </ul>
              </div>
              <div className="projectSkills">
                <div>
                  <h4 className="projectFeature">Tecnologías usadas</h4>
                </div>
                <div className="skillsList">
                  <div>
                    <LogoHtml width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">Html</p>
                  </div>
                  <div>
                    <LogoCSS width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">CSS</p>
                  </div>
                  <div>
                    <LogoReact width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">React</p>
                  </div>
                  <div >
                    <LogoTypeScript width={"3rem"} height={"3rem"} />
                    <p className="projectIndividualSkills">TypeScript</p>
                  </div>
                  <div>
                    <img src="/zustand-plain.svg" className="zustandImg" />
                    <p className="projectIndividualSkills">Zustand</p>
                  </div>
                </div>
              </div>
              <nav className="projectsLinks">
                <div>
                  <a href="https://github.com/cristobalceppi25/detective-conan-quiz" rel="noopener" target="_blank">GitHub</a>
                </div>
                <div>
                  <a href="https://detective-conan-quiz.vercel.app/" rel="noopener" target="_blank">Ver Proyecto</a>
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
                <h4 className="experiencePosition">Soporte a cliente eCommerce</h4>
              </div>
              <div>
                <ul className="experienceDescription">
                  <li>Desarrollo y mantenimiento de funcionalidades para plataformas eCommerce basadas en Magento (PHP), trabajando mediante un sistema de tickets.</li>
                  <li>Optimización de interfaz y maquetación responsive, mejorando la experiencia de usuario (UX) según los requerimientos del cliente.</li>
                  <li>Gestión y actualización de contenidos en sitios WordPress, asegurando la consistencia visual e integridad del sitio.</li>
                </ul>
              </div>
              <div className="experienceSkills">
                <span className="experienceSkillsTitle">Wordpress</span>
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
                <img src="/zustand-plain.svg" className="zustandImg" />
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
                  <p>Github</p>
                </div>
                <div className="individualLanguages">
                  <LogoWordpress width={"3rem"} height={"3rem"} />
                  <p>Wordpress</p>
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
                  <a onClick={openEnglish}>Inglés(C2)</a>
                </div>
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

      <dialog ref={ecommerceRef} className="dialogCarrusel">
        <div className="dialogContentCarrusel">
          <img src={carruselImagenesEcommerce[indexCommerce]}
            alt="Certificado"
            className="dialogImageCarrusel" />
          <button onClick={closeModalEcommerce} className="dialogCloseCarrusel">X</button>
        </div>
        <div className="dialogCarruselButtons">
          {
            carruselImagenesEcommerce.map((_, imageIndex) => (
              <button key={imageIndex} onClick={() => setIndexCommerce(imageIndex)} className={imageIndex === indexCommerce ? "dialogActive" : "notActive"}>
                <CircleButton />
              </button>
            ))
          }
        </div>
      </dialog>

      <dialog ref={quizRef} className="dialogCarrusel">
        <div className="dialogContentCarrusel">
          <img src={carruselImagenesQuiz[indexQuiz]}
            alt="Certificado"
            className="dialogImageCarrusel" />
          <button onClick={closeModalQuiz} className="dialogCloseCarrusel">X</button>
        </div>
        <div className="dialogCarruselButtons">
          {
            carruselImagenesQuiz.map((_, imageIndex) => (
              <button key={imageIndex} onClick={() => setIndexQuiz(imageIndex)} className={imageIndex === indexQuiz ? "dialogActive" : "notActive"}>
                <CircleButton />
              </button>
            ))
          }
        </div>
      </dialog>

      <section className="contact" id="contact">
        <h2 className="sectionTitle">Conversemos</h2>
        <p className="contextText">Actualmente me encuentro buscando oportunidades como Desarrollador Front-End React. Si crees que mi perfil puede aportar a tu equipo, estaré encantado de conversar.</p>
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
            Github
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

