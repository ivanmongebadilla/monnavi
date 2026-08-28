"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const Arrow = () => <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 10h13M11 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Plus = () => <span className="plus">+</span>;

const capabilities = [
  ["01", "Software", "Purpose-built systems that match the way your operation actually works."],
  ["02", "Artificial intelligence", "Practical AI that helps teams answer, decide, and act with more confidence."],
  ["03", "Automation", "Clear away repetitive work and keep essential processes moving without bottlenecks."],
  ["04", "Connected operations", "Bring sensors, machines, data, and people into one dependable operating picture."],
  ["05", "Data", "Turn scattered information into visibility, useful signals, and better decisions."],
  ["06", "Digitalization", "Move critical, manual workflows into simple tools your team will actually use."],
];

const solutions = [
  ["01", "Operate", "Custom business systems", "Inventory, CRM, maintenance, field operations, and the workflows between them."],
  ["02", "Automate", "Intelligent workflows", "AI agents, document processing, approvals, alerts, and integrations that remove busywork."],
  ["03", "See", "Data & decision systems", "Dashboards and data platforms that make the state of your business visible at a glance."],
  ["04", "Connect", "Smart environments", "Industrial IoT, smart irrigation, sensors, computer vision, and connected equipment."],
];

const industries = [
  ["Agriculture", "Make water, field activity, and equipment more measurable and manageable."],
  ["Industry", "See what’s happening on the floor and catch operational issues earlier."],
  ["Commerce", "Connect customers, inventory, sales, and service into a clearer daily rhythm."],
  ["Field operations", "Give distributed teams the information and tools to do their best work anywhere."],
  ["Hospitality", "Streamline the details behind a great guest experience."],
  ["Professional services", "Create less administrative drag and more time for valuable client work."],
];

const projects = [
  ["Smart irrigation", "A connected view of zones, sensors, and schedules—built to conserve resources while keeping operations in control.", "IoT · Automation"],
  ["AI business assistant", "A secure internal assistant that turns company knowledge into quick, grounded answers for the people who need them.", "AI · Knowledge systems"],
  ["Operations command center", "A real-time dashboard for the metrics, alerts, and open work that drive an industrial operation.", "Data · Integration"],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      const nextSrc =
        video.dataset.direction === "forward"
          ? "/monnavi-hero-reverse.mp4"
          : "/monnavi-hero.mp4";

      video.dataset.direction =
        video.dataset.direction === "forward" ? "reverse" : "forward";

      video.src = nextSrc;
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.dataset.direction = "forward";
    video.addEventListener("ended", handleEnded);

    video.play().catch(() => {});

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const es = language === "es";
  const t = (spanish: string, english: string) => es ? spanish : english;
  const localCapabilities = es ? [
    ["01", "Software", "Desde una landing page hasta sistemas a la medida que se adaptan a cómo realmente opera tu empresa."],
    ["02", "Inteligencia artificial", "IA práctica para automatizar tareas, encontrar información y ayudar a tu equipo a responder y decidir mejor."],
    ["03", "Automatización", "Convierte tareas repetitivas en flujos simples que ahorran tiempo y mantienen el trabajo avanzando."],
    ["04", "Web & presencia digital", "Sitios web, landing pages y experiencias digitales diseñadas para representar tu negocio y generar oportunidades."],
    ["05", "Datos", "Dashboards e integraciones que convierten la información de tu negocio en visibilidad y decisiones más claras."],
    ["06", "IoT & operaciones conectadas", "Conecta sensores, equipos, datos y personas para hacer tus operaciones más medibles y eficientes."],
  ] : capabilities;
  const localSolutions = es ? [
    ["01", "Crea", "Presencia digital", "Landing pages, sitios web, catálogos digitales y experiencias online diseñadas para que tu negocio tenga una presencia profesional y convierta visitantes en clientes."],
    ["02", "Opera", "Sistemas a medida", "Desde herramientas internas hasta CRM, inventario, mantenimiento y plataformas diseñadas alrededor de cómo trabaja tu empresa."],
    ["03", "Automatiza", "Flujos inteligentes", "Agentes de IA, automatizaciones, documentos, aprobaciones, alertas e integraciones que eliminan trabajo repetitivo."],
    ["04", "Visualiza", "Datos para decidir", "Dashboards e integraciones que convierten la información de tu negocio en una visión clara de lo que está pasando."],
    ["05", "Escala", "Operaciones conectadas", "IoT, sensores, visión computacional y sistemas conectados para operaciones que necesitan mayor control y visibilidad."],
  ] : solutions;
  const localIndustries = es ? [
    ["Agricultura", "Digitaliza el campo, mide mejor el uso de recursos y conecta la operación con datos que ayudan a decidir."],
    ["Industria", "Mejora la visibilidad de planta, automatiza procesos y detecta problemas operativos antes."],
    ["Comercio", "Conecta clientes, ventas, inventario y operaciones para que tu negocio trabaje de forma más ordenada."],
    ["Operaciones de campo", "Dale a equipos distribuidos las herramientas y la información que necesitan para trabajar mejor desde cualquier lugar."],
    ["Hospitalidad", "Simplifica la operación detrás de una gran experiencia para tus clientes y huéspedes."],
    ["Servicios profesionales", "Reduce tareas administrativas y crea herramientas digitales que te permitan dedicar más tiempo a tus clientes."],
  ] : industries;
  const localProjects = es ? [
    ["Sitio web para negocio", "Una experiencia web moderna diseñada para presentar una marca, explicar sus servicios y convertir visitantes en clientes.", "Web · Diseño · Desarrollo"],
    ["Automatización con IA", "Un flujo inteligente que procesa información, elimina tareas repetitivas y ayuda al equipo a trabajar con mayor rapidez.", "IA · Automatización"],
    ["Centro de control operativo", "Un dashboard en tiempo real para las métricas, alertas y trabajo abierto que mueve una operación.", "Datos · Integración"],
  ] : projects;
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <main>
    <nav className="nav">
      <a className="brand" href="#home" aria-label="MONNAVI home">MONNAVI<span className="brand-dot">.</span></a>
      <div className="nav-links"><a href="#solutions">{t("Soluciones", "Solutions")}</a><a href="#industries">{t("Industrias", "Industries")}</a><a href="#about">{t("Nosotros", "About")}</a></div>
      <div className="nav-right"><button className="language-switch" onClick={() => setLanguage(es ? "en" : "es")} aria-label={t("Cambiar a inglés", "Switch to Spanish")}><b>{es ? "ES" : "EN"}</b><span>/</span>{es ? "EN" : "ES"}</button><a className="nav-cta" href="#contact">{t("Hablemos", "Let's talk")} <Arrow /></a></div>
    </nav>

    <section id="home" className="hero section-wrap">
      {/* <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/monnavi-hero.mp4" type="video/mp4" /></video> */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/monnavi-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true"><span/><span/><span/><span/><span/><span/></div>
      <div className="hero-content">
        {/* <div className="hero-brand reveal">MONNAVI</div>
        <div className="eyebrow hero-eyebrow reveal"><span className="eyebrow-item">Software</span><span className="eyebrow-divider">·</span><span className="eyebrow-item">IA</span><span className="eyebrow-divider">·</span><span className="eyebrow-item">Automatización</span><span className="eyebrow-divider">·</span><span className="eyebrow-item">IoT</span></div>
        <h1 className="hero-title reveal">{t("Tecnología que hace que el trabajo", "Technology that makes")}<br/><i>{t("avance.", "work move.")}</i></h1> */}
        
        <div className="hero-brand hero-reveal hero-reveal-1">
          MONNAVI
        </div>

        <div className="eyebrow hero-eyebrow">
          <span className="tech-word tech-word-1">Software</span>
          <span className="eyebrow-divider">·</span>
          <span className="tech-word tech-word-2">IA</span>
          <span className="eyebrow-divider">·</span>
          <span className="tech-word tech-word-3">Automatización</span>
          <span className="eyebrow-divider">·</span>
          <span className="tech-word tech-word-4">IoT</span>
        </div>

        <h1 className="hero-title hero-reveal hero-reveal-9">
          {t("Tecnología que hace que el trabajo", "Technology that makes")}
          <br />
          <i>{t("avance.", "work move.")}</i>
        </h1>
        <div className="hero-bottom reveal"><p>{t("MONNAVI convierte los retos operativos en sistemas claros, conectados y hechos para el ritmo de tu empresa.", "MONNAVI turns operational challenges into systems that are clear, connected, and built for the way your business moves.")}</p>
          <div className="hero-actions">
            <a href="#contact" className="button button-light">{t("Inicia una conversación", "Start a conversation")} <Arrow /></a>
            {/* <a href="#solutions" className="text-link">{t("Explora nuestro trabajo", "Explore our work")} <Arrow /></a> */}
          </div>
        </div>
      </div>
      <div className="hero-marker"><span>{t("Explora hacia abajo", "Scroll to explore")}</span><b/></div>
      <div className="hero-signal" aria-label="Live systems illustration"><span className="signal-label">SYSTEMS / 01</span><span className="signal-num">01</span><span className="signal-line"/><span className="signal-node"/></div>
    </section>

    <section className="intro section-wrap"><p className="section-kicker">01 / {t("LO QUE HACEMOS", "WHAT WE DO")}</p><div className="intro-copy"><h2>{t("Las operaciones complejas", "Complex operations")}<br/>{t("merecen ", "deserve ")}<em>{t("sistemas claros.", "clear systems.")}</em></h2><p>{t("Combinamos las disciplinas tecnológicas correctas alrededor del problema real, no al revés. El resultado es tecnología útil que se gana su lugar en tu empresa.", "We combine the right technology disciplines around the real problem—not the other way around. The result is useful technology that earns its place in your business.")}</p></div><div className="capability-grid">{localCapabilities.map(([number, title, text]) => <article className="capability" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><Plus /></article>)}</div></section>

    <section id="solutions" className="solutions section-wrap"><div className="section-heading"><p className="section-kicker">02 / {t("SOLUCIONES", "SOLUTIONS")}</p><h2>{t("Construido alrededor del", "Built around the")}<br/><em>{t("trabajo que importa.", "work that matters.")}</em></h2><p>{t("Desde un flujo con fricción hasta un modelo operativo conectado, hacemos que la tecnología sea práctica.", "From a single high-friction workflow to a connected operating model, we make technology practical.")}</p></div><div className="solution-list">{localSolutions.map(([number, label, title, text]) => <article className="solution-row" key={title}><div><span>{number}</span><small>{label}</small></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`${t("Hablar sobre", "Discuss")} ${title}`}><Arrow /></a></article>)}</div></section>

    <section id="industries" className="industries section-wrap"><p className="section-kicker">03 / {t("INDUSTRIAS", "INDUSTRIES")}</p><div className="industries-title"><h2>{t("Cada operación tiene", "Every operation has")}<br/>{t("una ", "a different ")}<em>{t("realidad distinta.", "reality.")}</em></h2><p>{t("Nuestro punto de partida siempre es el mismo: entender cómo funcionan las cosas hoy y mejorar lo que más importa.", "Our starting point is always the same: understand how things work today, then improve what matters most.")}</p></div><div className="industries-grid">{localIndustries.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="process section-wrap">
      <p className="section-kicker">04 / {t("CÓMO TRABAJAMOS", "HOW WE WORK")}</p>
      <div className="process-head">
        <h2>{t("Empezamos por el", "Start with the")}<br/><em>{t("problema.", "problem.")}</em></h2>
        <p>{t("No hay un paquete predefinido que vender. Trabajamos desde la necesidad operativa, con las personas más cercanas a ella.", "There is no predefined package to sell. We work from the operational need, with the people closest to it.")}</p>
      </div>
      <ol>{(es ? ["Descubrir", "Diseñar", "Construir", "Integrar", "Mejorar"] : ["Discover", "Design", "Build", "Integrate", "Improve"]).map((item, i) => <li key={item}><span>0{i + 1}</span><h3>{item}</h3><i>{i === 4 ? "↗" : "→"}</i></li>)}</ol></section>

    <section className="tech section-wrap">
      <div className="tech-visual">
        {/* <div className="tech-ring ring-a"/>
        <div className="tech-ring ring-b"/>
        <div className="tech-core">M</div>
        <span className="tag tag-one">IA</span>
        <span className="tag tag-two">DATA</span>
        <span className="tag tag-three">CLOUD</span>
        <span className="tag tag-four">SENSORES</span> */}
        <img src="/monnavi-tech.png" alt="MONNAVI technology ecosystem" />
      </div>
      <div className="tech-copy">
        <p className="section-kicker">05 / {t("TECNOLOGÍA", "TECHNOLOGY")}</p>
        <h2>{t("Capacidad profunda.", "Deep capability.")}<br/><em>{t("Aplicada con calma.", "Quietly applied.")}</em></h2>
        <p>{t("IA, APIs, nube, bases de datos, web, móvil, sensores, automatización y visión computacional son medios para un fin: una operación más capaz.", "AI, APIs, cloud, databases, web, mobile, sensors, automation, and computer vision are means to an end: a more capable operation.")}</p>
        <a className="text-link" href="#contact">{t("Hablemos de tu reto", "Talk through your challenge")} <Arrow /></a>
      </div>
    </section>

    <section className="projects section-wrap"><div className="section-heading"><p className="section-kicker">06 / {t("PROYECTOS CONCEPTUALES", "CONCEPT WORK")}</p><h2>{t("Ideas hechas", "Ideas made")}<br/><em>{t("concretas.", "concrete.")}</em></h2><p>{t("Ejemplos de los sistemas que MONNAVI puede diseñar y entregar. Son conceptos, no proyectos de clientes.", "Examples of the kinds of systems MONNAVI can design and deliver. These are concept projects, not client claims.")}</p></div><div className="project-grid">{localProjects.map(([title, text, type], i) => <article key={title} className={`project project-${i + 1}`}><div className="project-art"><span>{i === 0 ? "◌" : i === 1 ? "✦" : "▦"}</span></div><div className="project-info"><small>{type}</small><h3>{title}</h3><p>{text}</p><a href="#contact">{t("Explorar concepto", "Explore concept")} <Arrow /></a></div></article>)}</div></section>

    <section id="about" className="about section-wrap"><p className="section-kicker">07 / {t("SOBRE MONNAVI", "ABOUT MONNAVI")}</p><div><h2>{t("La tecnología debe resolver problemas,", "Technology should solve problems,")} <em>{t("no crear complejidad.", "not create complexity.")}</em></h2><p>{t("MONNAVI existe para cerrar la brecha entre las operaciones tradicionales y la tecnología moderna útil. Construimos con precisión, nos mantenemos cerca de la necesidad práctica y cuidamos lo que pasa después del lanzamiento.", "MONNAVI exists to close the gap between traditional operations and useful modern technology. We build with precision, stay close to the practical need, and care about what happens after launch.")}</p></div></section>

    <section id="contact" className="contact section-wrap"><div className="contact-copy"><p className="section-kicker">08 / {t("CONTACTO", "GET IN TOUCH")}</p><h2>{t("¿Tienes un problema", "Have a problem")}<br/><em>{t("que vale la pena resolver?", "worth solving?")}</em></h2><p>{t("Cuéntanos qué está frenando a tu empresa. Exploraremos cómo la tecnología puede mejorarlo.", "Tell us what is slowing your business down. We’ll explore how technology can make it better.")}</p><a href="mailto:monnavitech@gmail.com" className="email">monnavitech@gmail.com <Arrow /></a><a className="whatsapp" href="https://wa.me/526371000000" target="_blank" rel="noreferrer">{t("Escríbenos por WhatsApp", "WhatsApp us")} <Arrow /></a></div><form onSubmit={submit}><label>{t("Tu nombre", "Your name")}<input required placeholder={t("Nombre", "Name")} /></label><label>{t("Email de trabajo", "Work email")}<input type="email" required placeholder="you@company.com" /></label><label>{t("¿Qué estás buscando mejorar?", "What are you looking to improve?")}<textarea required placeholder={t("Un poco de contexto ayuda mucho.", "A little context goes a long way.")} rows={4}/></label><button className="button button-light" type="submit">{sent ? t("Mensaje recibido", "Message received") : t("Enviar consulta", "Send inquiry")} <Arrow /></button>{sent && <p className="form-note">{t("Gracias. Te contactaremos pronto.", "Thank you. We’ll be in touch shortly.")}</p>}</form></section>
  </main>;
}
