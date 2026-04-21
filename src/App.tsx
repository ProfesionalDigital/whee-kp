import { useEffect } from 'react';

const Navbar = () => (
  <nav className="nav">
    <div className="nav-inner">
      {/* <a href="#" className="logo" aria-label="Whee, con KP by GMD">
        <span className="logo-mark">Whee</span>
        <span className="logo-sub">
          <span className="kp">KP<span> by GMD</span></span>
          <span className="by">Una marca GMD</span>
        </span>
      </a> */}
      <a href="#">
        <img width={120} className='mix-blend-darken' src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/c1a71f71-8616-4475-3145-30b3a5787100/public" alt="" />
      </a>
      <ul className="nav-links">
        <li><a href="#problema">El problema</a></li>
        <li><a href="#sillas">Las sillas</a></li>
        <li><a href="#proceso">El proceso</a></li>
        <li><a href="#equipo">El equipo</a></li>
        {/* <li><a href="#faq">Preguntas</a></li> */}
      </ul>
      <a href="https://wa.me/573005148844?text=Hola%2C%20quiero%20empezar%20mi%20proceso%20con%20Whee" className="nav-cta" target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        WhatsApp
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div>
      <div className="hero-eyebrow">Asesoría profesional · Colombia</div>
      <h1 className="hero-title">
        La silla de ruedas correcta no se compra. Se <em>encuentra</em> con un proceso.
      </h1>
      <p className="hero-sub">
        Te acompañamos desde la evaluación hasta el ajuste para que tu movilidad funcione en la vida real. No vendemos catálogo. Te ayudamos a encontrar lo que necesitas.
      </p>
      <div className="hero-ctas">
        <a href="https://wa.me/573005148844?text=Hola%2C%20quiero%20empezar%20mi%20proceso%20con%20Whee" className="btn-primary" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          Quiero empezar mi proceso
        </a>
        <a href="https://calendly.com/silladeruedaswhee" className="btn-secondary" target="_blank" rel="noopener noreferrer">
          Agendar cita
        </a>
      </div>
      <p className="hero-note">
        <strong>Toma 2 minutos.</strong> Te contactamos por WhatsApp, sin compromiso.
      </p>
    </div>

    <div className="hero-visual w-full">
      <div className="blob-bg" aria-hidden="true">
        <svg viewBox="0 0 420 520" preserveAspectRatio="xMidYMid meet">
          <path d="M210,40 C330,40 390,130 390,260 C390,380 330,480 210,480 C100,480 30,380 30,260 C30,140 100,40 210,40 Z" fill="#EFEAFA" />
          <path d="M210,70 C310,70 360,160 360,260 C360,360 310,450 210,450 C120,450 60,360 60,260 C60,160 120,70 210,70 Z" fill="none" stroke="#5B3CAD" strokeWidth="1" strokeDasharray="2 6" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] z-10 group rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(91,60,173,0.25)] border-[8px] border-white bg-white">
        <img 
          src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/4ca9e91d-fbd5-466b-ad81-e1ab0f371700/public" 
          alt="Persona usando silla de ruedas Whee" 
          className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="trust">
    <div className="trust-inner">
      <div className="trust-item">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Certificación WSTP · OMS
      </div>
      <div className="trust-item">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Registros INVIMA
      </div>
      <div className="trust-item">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Cobertura nacional
      </div>
      <div className="trust-item">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4M4 6v12a2 2 0 002 2h14v-4M18 12h2v4h-2a2 2 0 110-4z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Garantía KP by GMD
      </div>
    </div>
  </div>
);

const Problem = () => (
  <section className="problem" id="problema">
    <div className="section-inner">
      <div className="eyebrow">Lo que suele salir mal</div>
      <h2>Comprar una silla sin <em>proceso</em> termina mal.</h2>
      <p className="section-sub">Hablamos con cientos de familias. Las historias se repiten. No es mala suerte: es falta de acompañamiento.</p>

      <div className="problem-grid">
        <div className="problem-card">
          <div className="problem-num">01</div>
          <div className="problem-text">Sillas mal formuladas que no corresponden al cuerpo.</div>
        </div>
        <div className="problem-card">
          <div className="problem-num">02</div>
          <div className="problem-text">Dolor y mala postura a los pocos meses de uso.</div>
        </div>
        <div className="problem-card">
          <div className="problem-num">03</div>
          <div className="problem-text">Abandono de la silla en la casa por incomodidad.</div>
        </div>
        <div className="problem-card">
          <div className="problem-num">04</div>
          <div className="problem-text">Pérdida de autonomía y retroceso en la rehabilitación.</div>
        </div>
      </div>

      <p className="problem-closing">
        No es un problema <strong>de la persona</strong>. Es un problema <strong>del proceso</strong>.
      </p>
    </div>
  </section>
);

const HowWeDoIt = () => (
  <section className="howwe">
    <div className="section-inner">
      <div className="eyebrow">Así lo hacemos en Whee</div>
      <h2>Tres pasos que cambian <em>todo</em>.</h2>

      <div className="pillars">
        <div className="pillar">
          <div className="pillar-num">01</div>
          <h3 className="pillar-title">Evaluamos</h3>
          <p className="pillar-text">Tu cuerpo, tu entorno y tu vida. Medidas, postura, uso cotidiano, entorno doméstico, expectativas. Todo lo que define si una silla te va a servir de verdad.</p>
        </div>
        <div className="pillar">
          <div className="pillar-num">02</div>
          <h3 className="pillar-title">Ajustamos</h3>
          <p className="pillar-text">La silla se adapta a ti, no tú a ella. Configuramos modelo, medidas y accesorios para que funcione en tu día a día — en casa, en la calle, en el trabajo.</p>
        </div>
        <div className="pillar">
          <div className="pillar-num">03</div>
          <h3 className="pillar-title">Acompañamos</h3>
          <p className="pillar-text">Tu uso en el tiempo. Seguimiento a 30 y 90 días, ajustes por cambio postural, repuestos y soporte cuando lo necesites. No te soltamos al entregarla.</p>
        </div>
      </div>
    </div>
  </section>
);

const Chairs = () => (
  <section className="chairs" id="sillas">
    <div className="section-inner">
      <div className="chair-head">
        <div>
          <div className="eyebrow">Conoce tus posibles sillas</div>
          <h2>Cuatro sillas, <em>cuatro perfiles</em>.</h2>
        </div>
        <p className="section-sub" style={{ marginBottom: 0 }}>Sillas especializadas KP by GMD, seleccionadas para distintas patologías, entornos y formas de vivir. No las vas a ver con códigos raros — las conoces por nombre.</p>
      </div>

      <div className="chair-grid">
        <div className="chair-card">
          <div className="w-[150px] h-[150px]">
            <img src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/8c7867ea-722c-4295-6dd6-0ba63ad7b300/public" alt="Oliva" />
          </div>
          <div className="chair-body">
            <div className="chair-name">Oliva</div>
            <div className="chair-tagline">Fuerte como la tierra que florece.</div>
            <p className="chair-profile">Para quienes necesitan estabilidad y resistencia en uso cotidiano prolongado. Estructura robusta, pensada para durar.</p>
            <a href="https://wa.me/573005148844?text=Hola%2C%20quiero%20saber%20si%20Oliva%20es%20mi%20silla" className="chair-cta" target="_blank" rel="noopener noreferrer">
              ¿Es esta mi silla? <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>

        <div className="chair-card">
          <div className="w-[150px] h-[150px]">
            <img className='mix-blend-darken' src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/b299035e-774c-4d1b-18e4-6d79a010d900/public" alt="Luna" />
          </div>
          <div className="chair-body">
            <div className="chair-name">Luna</div>
            <div className="chair-tagline">Flexible y serena, reflejando la luz de cada cuerpo.</div>
            <p className="chair-profile">Para quien necesita adaptabilidad y soporte postural diferenciado. Se ajusta a distintas condiciones con gracia.</p>
            <a href="https://wa.me/573005148844?text=Hola%2C%20quiero%20saber%20si%20Luna%20es%20mi%20silla" className="chair-cta" target="_blank" rel="noopener noreferrer">
              ¿Es esta mi silla? <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>

        <div className="chair-card">
          <div className="w-[150px] h-[150px]">
            <img className='mix-blend-darken' src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/dadb685f-52d1-4959-23ab-67f389ffdc00/public" alt="Oliva" />
          </div>
          <div className="chair-body">
            <div className="chair-name">Lima</div>
            <div className="chair-tagline">Frescura que se divierte sin miedo.</div>
            <p className="chair-profile">Para vidas activas, ágiles, que no se detienen. Ligera, dinámica, pensada para el movimiento confiado.</p>
            <a href="https://wa.me/573005148844?text=Hola%2C%20quiero%20saber%20si%20Lima%20es%20mi%20silla" className="chair-cta" target="_blank" rel="noopener noreferrer">
              ¿Es esta mi silla? <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>

        <div className="chair-card">
          <div className="w-[150px] h-[150px]">
            <img className='-scale-x-100 mix-blend-darken' src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/965f37a6-8cb5-4865-7805-5e87ab6e5900/public" alt="Oliva" />
          </div>
          <div className="chair-body">
            <div className="chair-name">Uva</div>
            <div className="chair-tagline">Juego, vitalidad y movimiento alegre.</div>
            <p className="chair-profile">Diseñada especialmente para los más pequeños y jóvenes. Energía, color y medidas pensadas para crecer con ellos.</p>
            <a href="https://wa.me/573005148844?text=Hola%2C%20quiero%20saber%20si%20Uva%20es%20mi%20silla" className="chair-cta" target="_blank" rel="noopener noreferrer">
              ¿Es esta mi silla? <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="process" id="proceso">
    <div className="section-inner">
      <div className="eyebrow">Cómo es el proceso</div>
      <h2>De la primera conversación a <em>rodar con confianza</em>.</h2>
      <p className="section-sub">Cinco pasos claros. Sin sorpresas, sin ventas de presión, sin papeleo complicado.</p>

      <div className="process-grid">
        <div className="process-line"></div>
        <div className="step">
          <div className="step-dot">1</div>
          <div className="step-title">Nos cuentas</div>
          <div className="step-text">WhatsApp o formulario de 2 minutos.</div>
        </div>
        <div className="step">
          <div className="step-dot">2</div>
          <div className="step-title">Evaluamos juntos</div>
          <div className="step-text">Sesión virtual o presencial con el equipo.</div>
        </div>
        <div className="step">
          <div className="step-dot">3</div>
          <div className="step-title">Recomendamos tu silla</div>
          <div className="step-text">Con justificación clínica clara.</div>
        </div>
        <div className="step">
          <div className="step-dot">4</div>
          <div className="step-title">Tomas tus medidas</div>
          <div className="step-text">Te guiamos paso a paso con video.</div>
        </div>
        <div className="step">
          <div className="step-dot">5</div>
          <div className="step-title">Recibes en casa</div>
          <div className="step-text">Con ajuste presencial y seguimiento.</div>
        </div>
      </div>
    </div>
  </section>
);

const Colombia = () => (
  <section className="colombia">
    <div className="section-inner">
      <div className="eyebrow">Diseñadas para Colombia</div>
      <h2>Con el respaldo de <em>25 años</em> habilitando vidas.</h2>
      <p className="section-sub">Whee no está sola. Detrás está KP by GMD — la marca colombiana que lleva un cuarto de siglo haciendo ayudas técnicas para el colombiano real: distancias, climas, calles, entornos y cuerpos de aquí.</p>

      <div className="stats">
        <div>
          <div className="stat-num">25+</div>
          <div className="stat-label">Años de GMD</div>
          <div className="stat-desc">Habilitando vidas en Colombia desde 2001.</div>
        </div>
        <div>
          <div className="stat-num">1.000+</div>
          <div className="stat-label">Referencias</div>
          <div className="stat-desc">Portafolio de ayudas técnicas y dispositivos médicos.</div>
        </div>
        <div>
          <div className="stat-num">100%</div>
          <div className="stat-label">INVIMA</div>
          <div className="stat-desc">Todos los productos con registro sanitario vigente.</div>
        </div>
        <div>
          <div className="stat-num">Nacional</div>
          <div className="stat-label">Cobertura</div>
          <div className="stat-desc">Entrega, repuestos y postventa en todo el país.</div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="team" id="equipo">
    <div className="section-inner">
      <div className="eyebrow">Quienes te acompañan</div>
      <h2>Fisioterapeutas, no <em>call center</em>.</h2>
      <p className="section-sub">Detrás de cada evaluación hay una profesional con años de experiencia clínica y certificación internacional. No vendedoras. No asesoras comerciales. Fisioterapeutas de verdad.</p>

      <div className="team-grid">
        <div className="team-card">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden team-avatar ">
            <img className='relative top-[10px]' width={120} src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/6bf35396-38af-445c-0ba3-a52c88f57a00/public" alt="" />
          </div>
          <div>
            <div className="team-name">Sara Múnera</div>
            <div className="team-creds">FT · mg · WSTP</div>
            <p className="team-bio">Fisioterapeuta magíster, certificada en el Wheelchair Service Training Package de la Organización Mundial de la OMS. Lidera el proceso de asesoría y evaluación clínica.</p>
          </div>
        </div>
        <div className="team-card">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden team-avatar ">
            <img className='relative top-[10px]' width={120} src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/5337d584-d2b8-473a-60ab-c04c87f8d100/public" alt="" />
          </div>
          <div>
            <div className="team-name">Tatiana González</div>
            <div className="team-creds">FT · mg</div>
            <p className="team-bio">Fisioterapeuta magíster, especializada en evaluación postural y adaptación de ayudas técnicas. Acompaña cada silla desde la primera conversación hasta el seguimiento.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="final-cta">
    <div className="section-inner">
      <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Comencemos</div>
      <h2>Tu movilidad, <em>en proceso</em>.</h2>
      <p>En dos minutos nos cuentas lo que necesitas. Te contactamos por WhatsApp el mismo día, sin compromiso y sin letra pequeña.</p>
      <div className="hero-ctas">
        <a href="https://wa.me/573005148844?text=Hola%2C%20quiero%20empezar%20mi%20proceso%20con%20Whee" className="btn-primary" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          Quiero empezar mi proceso
        </a>
        <a href="https://calendly.com/silladeruedaswhee" className="btn-secondary" target="_blank" rel="noopener noreferrer">
          Agendar cita
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="foot-inner">
      <div className="foot-top">
        <div className="foot-brand">
          <a href="#" className="logo" aria-label="Whee, con KP by GMD">
            <span className="logo-mark">Whee</span>
            <span className="logo-sub">
              <span className="kp">KP<span> by GMD</span></span>
              <span className="by">Una marca GMD</span>
            </span>
          </a>
          <p className="foot-tagline">Asesoría profesional de sillas de ruedas para Colombia. Una unidad de Impormedical S.A. Habilitando el potencial de la vida.</p>
        </div>
        <div className="foot-col">
          <h4>Whee</h4>
          <ul>
            <li><a href="#problema">El problema</a></li>
            <li><a href="#sillas">Las sillas</a></li>
            <li><a href="#proceso">El proceso</a></li>
            <li><a href="#equipo">El equipo</a></li>
            {/* <li><a href="#faq">Preguntas</a></li> */}
          </ul>
        </div>
        <div className="foot-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/573005148844" target="_blank" rel="noopener noreferrer">WhatsApp: +57 300 514 8844</a></li>
            <li><a href="https://calendly.com/silladeruedaswhee" target="_blank" rel="noopener noreferrer">Agendar cita</a></li>
            <li><a href="mailto:contacto@whee-educacion.com">contacto@whee-educacion.com</a></li>
            <li>Medellín · Colombia</li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Redes</h4>
          <ul>
            <li><a href="https://www.instagram.com/whee.educacion/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/whee.educacion/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/whee-educación/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.tiktok.com/@whee.educacion" target="_blank" rel="noopener noreferrer">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Impormedical S.A. · Whee, una marca GMD</span>
        <span>
          <a href="#">Declaración de accesibilidad</a> ·
          <a href="#">Política de tratamiento de datos</a>
        </span>
      </div>
    </div>
  </footer>
);

export default function App() {

  useEffect(() => {
    // Smooth nav active state
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Problem />
      <HowWeDoIt />
      <Chairs />
      <Process />
      <Colombia />
      <Team />
      <FinalCTA />
      <Footer />
    </>
  );
}
