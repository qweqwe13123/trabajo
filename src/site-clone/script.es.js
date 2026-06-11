(function () {
  // ---------- Templates carousel ----------
  var TEMPLATES = [{name:"Cl\u00e1sico",img:"/templates/chicago-resume-templates.jpg"},{name:"Profesional",img:"/templates/dublin-resume-templates.jpg"},{name:"Moderno",img:"/templates/helsinki-ca1d2b7f.jpg"},{name:"Regular",img:"/templates/shanghai-resume-templates.jpg"},{name:"Minimalista",img:"/templates/singapore-6d371a1d.jpg"},{name:"Creativo",img:"/templates/sydney-resume-templates.jpg"},{name:"Ejecutivo",img:"/templates/vienna-resume-templates.jpg"}];
  function tplCard(t) {
    return '<div class="tpl-card" data-open-form>' +
      '<div class="tpl-preview" style="padding:0;background:#f4f4f5"><img src="' + t.img + '" alt="' + t.name + '" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy"/><div class="tpl-overlay"><button type="button" class="tpl-use-btn" data-open-form>Usar esta plantilla</button></div></div>' +
      '<div class="tpl-meta"><div class="tpl-name">' + t.name + '</div></div>' +
      '</div>';
  }
  var scroller = document.getElementById('tpl-scroll');
  if (scroller) {
    scroller.innerHTML = TEMPLATES.map(tplCard).join('');
    var prevBtn = document.getElementById('tpl-prev');
    var nextBtn = document.getElementById('tpl-next');
    var step = function () { return Math.max(300, scroller.clientWidth * 0.6); };
    if (prevBtn) prevBtn.addEventListener('click', function () { scroller.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (nextBtn) nextBtn.addEventListener('click', function () { scroller.scrollBy({ left: step(), behavior: 'smooth' }); });
    requestAnimationFrame(function () {
      var cards = scroller.querySelectorAll('.tpl-card');
      if (cards[2]) { var c = cards[2]; scroller.scrollLeft = c.offsetLeft - (scroller.clientWidth - c.clientWidth) / 2; }
    });
  }

  // ---------- Reviews ----------
  var REVIEWS = [{n:"Mar\u00eda G.",m:"Asistente M\u00e9dica \u00b7 Florida",s:5,t:"Me mud\u00e9 a Estados Unidos hace dos a\u00f1os y no ten\u00eda idea de c\u00f3mo deb\u00eda verse un curr\u00edculum en este pa\u00eds. Reescribieron completamente mi curr\u00edculum y me ayudaron a destacar mi experiencia de la manera correcta. En menos de un mes tuve tres entrevistas y acept\u00e9 un mejor puesto de trabajo."},{n:"Carlos M.",m:"Asociado de Almac\u00e9n \u00b7 Texas",s:4,t:"La revisi\u00f3n de mi curr\u00edculum fue muy \u00fatil y me se\u00f1alaron errores que ni siquiera hab\u00eda notado. Me hubiera gustado recibir un poco m\u00e1s de orientaci\u00f3n sobre d\u00f3nde postularme, pero en general vali\u00f3 la pena la inversi\u00f3n."},{n:"Sofia R.",m:"Representante de Servicio al Cliente \u00b7 Nevada",s:5,t:"Profesionales, r\u00e1pidos y muy f\u00e1ciles de tratar. Me explicaron cada cambio que hicieron en mi curr\u00edculum y me dieron confianza para las entrevistas. Los recomiendo totalmente."},{n:"Juan P.",m:"T\u00e9cnico de HVAC \u00b7 Arizona",s:4,t:"Antes de usar Trabajo Listo no recib\u00eda llamadas de los empleadores. Despu\u00e9s de actualizar mi curr\u00edculum y perfil de LinkedIn, los reclutadores comenzaron a contactarme. La diferencia fue notable."},{n:"Andrea L.",m:"Asistente Administrativa \u00b7 California",s:5,t:"Muy buen servicio y excelente comunicaci\u00f3n. El curr\u00edculum final se ve\u00eda mucho m\u00e1s profesional. El proceso tom\u00f3 un poco m\u00e1s de tiempo de lo esperado, pero la calidad fue excelente."},{n:"Miguel C.",m:"Electricista \u00b7 Nueva Jersey",s:5,t:"Me ayudaron a convertir a\u00f1os de experiencia en un curr\u00edculum que los empleadores pudieran entender f\u00e1cilmente. Recib\u00ed solicitudes de entrevista en menos de dos semanas y termin\u00e9 aceptando un puesto mejor remunerado."},{n:"Valeria T.",m:"Recepcionista \u00b7 Illinois",s:4,t:"La preparaci\u00f3n para entrevistas por s\u00ed sola vali\u00f3 la pena. Aprend\u00ed a responder preguntas comunes y a presentar mi experiencia con confianza. Me sent\u00ed mucho m\u00e1s preparada."},{n:"Roberto D.",m:"Conductor de Reparto \u00b7 Georgia",s:5,t:"En general fue una buena experiencia. Mi curr\u00edculum qued\u00f3 mucho m\u00e1s limpio y organizado que antes. Me hubiera gustado una sesi\u00f3n adicional de seguimiento, pero qued\u00e9 satisfecho con el servicio."},{n:"Elena S.",m:"Asistente Dental \u00b7 Colorado",s:5,t:"Hab\u00eda estado solicitando empleos durante meses sin \u00e9xito. Reestructuraron mi curr\u00edculum y me ense\u00f1aron c\u00f3mo adaptarlo para cada puesto. Unas semanas despu\u00e9s recib\u00ed m\u00faltiples invitaciones para entrevistas."},{n:"Luis A.",m:"Supervisor de Construcci\u00f3n \u00b7 Carolina del Norte",s:5,t:"Excelente servicio de principio a fin. Comprendieron mi experiencia, mejoraron mi curr\u00edculum y me dieron consejos pr\u00e1cticos para la b\u00fasqueda de empleo. Definitivamente los recomendar\u00eda."},{n:"Daniel H.",m:"Operador de Montacargas \u00b7 Ohio",s:4,t:"Pensaba que mi curr\u00edculum estaba bien hasta que lo revisaron. Los cambios que hicieron fueron simples pero muy efectivos. Comenc\u00e9 a recibir respuestas casi de inmediato."},{n:"Patricia V.",m:"Cajera \u00b7 Pensilvania",s:5,t:"Equipo muy servicial y comunicaci\u00f3n clara. Mi curr\u00edculum qued\u00f3 mucho mejor despu\u00e9s de la revisi\u00f3n. Solo me hubiera gustado recibir m\u00e1s ejemplos de preguntas para entrevistas."},{n:"Jorge N.",m:"Plomero \u00b7 Nevada",s:5,t:"El curr\u00edculum que crearon me hizo ver mucho m\u00e1s profesional. Consegu\u00ed dos entrevistas durante la primera semana despu\u00e9s de actualizar mis solicitudes."},{n:"Melissa F.",m:"Coordinadora de Oficina \u00b7 Washington",s:5,t:"Excelente experiencia. Organizaron mi historial laboral y destacaron mis logros. Finalmente me sent\u00ed con confianza para postularme a mejores posiciones."},{n:"Ricardo B.",m:"T\u00e9cnico de Mantenimiento \u00b7 Michigan",s:4,t:"Hab\u00eda estado usando el mismo curr\u00edculum durante a\u00f1os. Modernizaron todo y me explicaron c\u00f3mo los gerentes de contrataci\u00f3n realmente revisan los curr\u00edculums en Estados Unidos."},{n:"Sandra C.",m:"Asociada de Ventas Minoristas \u00b7 Oreg\u00f3n",s:5,t:"El curr\u00edculum final qued\u00f3 excelente y las recomendaciones fueron muy \u00fatiles. Tom\u00f3 un poco m\u00e1s de tiempo de lo esperado, pero la calidad compens\u00f3 la espera."},{n:"Fernando R.",m:"Conductor de Cami\u00f3n \u00b7 Tennessee",s:5,t:"Servicio profesional con resultados reales. Mis solicitudes comenzaron a recibir atenci\u00f3n despu\u00e9s de meses sin respuestas. Definitivamente vali\u00f3 la inversi\u00f3n."},{n:"Gabriela M.",m:"Recepcionista de Hotel \u00b7 Florida",s:5,t:"Transformaron mi curr\u00edculum de un documento b\u00e1sico en algo profesional y pulido. Despu\u00e9s recib\u00ed m\u00faltiples invitaciones para entrevistas."},{n:"Oscar L.",m:"Carpintero \u00b7 Utah",s:4,t:"Apreci\u00e9 que se enfocaran en mis logros en lugar de simplemente enumerar responsabilidades. Mi curr\u00edculum finalmente reflej\u00f3 mi verdadera experiencia."},{n:"Diana P.",m:"Cuidadora Infantil \u00b7 Virginia",s:5,t:"Muy satisfecha en general. La revisi\u00f3n del curr\u00edculum fue detallada y f\u00e1cil de entender. Un poco m\u00e1s de orientaci\u00f3n para la b\u00fasqueda de empleo habr\u00eda sido \u00fatil."},{n:"Rafael E.",m:"Oficial de Seguridad \u00b7 Texas",s:5,t:"Me mostraron errores que probablemente me estaban costando entrevistas. Despu\u00e9s de la actualizaci\u00f3n, los reclutadores comenzaron a contactarme a trav\u00e9s de LinkedIn."},{n:"Monica A.",m:"Recepcionista M\u00e9dica \u00b7 California",s:5,t:"La preparaci\u00f3n para entrevistas me ayud\u00f3 much\u00edsimo. Estaba muy nerviosa antes, pero me sent\u00ed mucho m\u00e1s segura durante el proceso de contrataci\u00f3n."},{n:"Victor S.",m:"Pintor \u00b7 Arizona",s:4,t:"Excelente atenci\u00f3n a los detalles. Mi curr\u00edculum se ve\u00eda moderno, profesional y mucho m\u00e1s f\u00e1cil de leer que antes."},{n:"Paula G.",m:"Ama de Llaves de Hotel \u00b7 Nevada",s:5,t:"Buen servicio y personal amable. Las recomendaciones fueron pr\u00e1cticas y f\u00e1ciles de implementar. Volver\u00eda a utilizar el servicio."},{n:"Hector T.",m:"Gerente de Restaurante \u00b7 Illinois",s:5,t:"Me ayudaron a presentar correctamente mi experiencia de gesti\u00f3n. En pocas semanas recib\u00ed ofertas para puestos con mejor salario que mi empleo anterior."},{n:"Natalia R.",m:"Asociada de Ventas \u00b7 Nueva York",s:5,t:"Todo fue explicado de manera clara y profesional. El curr\u00edculum final super\u00f3 mis expectativas y me dio confianza para postularme a puestos de mayor nivel."},{n:"Alberto M.",m:"Soldador \u00b7 Indiana",s:4,t:"No estaba seguro de que un servicio de curr\u00edculums hiciera una diferencia, pero definitivamente la hizo. El curr\u00edculum que crearon se ve\u00eda mucho m\u00e1s profesional que cualquier cosa que hubiera podido hacer por mi cuenta."},{n:"Veronica D.",m:"Especialista en Atenci\u00f3n al Cliente \u00b7 Maryland",s:5,t:"La calidad fue excelente y los comentarios fueron muy detallados. Solo me hubiera gustado que mi paquete incluyera una revisi\u00f3n adicional."},{n:"Esteban C.",m:"Supervisor de Jardiner\u00eda \u00b7 Carolina del Norte",s:5,t:"Me ayudaron a organizar a\u00f1os de experiencia en un curr\u00edculum que finalmente ten\u00eda sentido. Los reclutadores comenzaron a responder con mucha m\u00e1s frecuencia."},{n:"Isabella F.",m:"Higienista Dental \u00b7 Nuevo M\u00e9xico",s:5,t:"Servicio excepcional. Profesionales, atentos y con un gran conocimiento del mercado laboral estadounidense. Recomendar\u00eda Trabajo Listo a cualquiera que quiera mejorar sus oportunidades profesionales."}];
  function initials(n) { return n.split(' ').map(function (p) { return p[0]; }).slice(0, 2).join('').toUpperCase(); }
  function rstars(n) { return '★'.repeat(n) + '<span style="color:#e4e4e7">' + '★'.repeat(5 - n) + '</span>'; }
  function rcard(r) {
    return '<div class="tl-rev-card">' +
      '<div class="tl-rev-stars">' + rstars(r.s) + '</div>' +
      '<p class="tl-rev-quote">' + r.t + '</p>' +
      '<div class="tl-rev-author"><div class="tl-rev-avatar">' + initials(r.n) + '</div><div><div class="tl-rev-name">' + r.n + '</div><div class="tl-rev-meta">' + r.m + '</div></div></div>' +
      '</div>';
  }
  var mid = Math.ceil(REVIEWS.length / 2);
  var row1 = REVIEWS.slice(0, mid);
  var row2 = REVIEWS.slice(mid);
  var r1 = document.getElementById('tl-rev-track-1');
  var r2 = document.getElementById('tl-rev-track-2');
  if (r1) r1.innerHTML = row1.concat(row1).map(rcard).join('');
  if (r2) r2.innerHTML = row2.concat(row2).map(rcard).join('');

  // ---------- Bilingual multi-step form ----------
  var I18N = {
    en: {
      step1_title: "Contact information",
      step1_sub: "Let's start with the basics. We'll only use these to deliver your resume.",
      f_name: "First & last name", f_email: "Email", f_phone: "Phone", f_lang: "Preferred language",
      step2_title: "Your current situation",
      step2_sub: "This helps us understand your level and the work involved.",
      f_working: "Are you currently working?",
      working: ["Yes, full time", "Yes, part time", "No, actively searching", "Planning to search"],
      f_industry: "Industry you want to work in",
      industry_placeholder: "Select…",
      industry: ["Construction / Trades", "Warehouse / Logistics", "Hospitality / Restaurant", "Customer Service", "Healthcare", "Office / Administration", "IT / Technology", "Other"],
      f_exp: "Years of experience",
      exp: ["No experience", "Less than 1 year", "1–3 years", "3–5 years", "More than 5 years"],
      f_hasResume: "Do you have a resume?",
      hasResume: ["Yes, in English", "Yes, in Spanish", "Yes, in both", "No"],
      f_english: "English level",
      english: ["Beginner", "Intermediate", "Advanced", "Fluent"],
      step3_title: "Resume details",
      step3_sub: "The more detail you share, the stronger your resume will be.",
      f_title: "Desired job title",
      f_skills: "Key skills (comma separated)",
      f_education: "Education", education_ph: "High school, technical school, college…",
      f_certs: "Certifications or licenses",
      f_jobs: "Last 2–3 jobs (company, role, dates, achievements)",
      f_strength: "Your biggest strength", strength_ph: "Reliable, fast learner, leadership…",
      f_challenge: "What's your biggest challenge in your job search?",
      challenge: ["Few responses", "No interview invites", "Resume looks unprofessional", "Hard to explain my experience", "Weak English", "Other"],
      step4_title: "Choose your package",
      step4_sub: "Pick the level of support you want. We auto-recommended the best fit below.",
      rec_pre: "Based on your answers we recommend the", rec_post: "package.",
      plan49_name: "Resume Review", plan49_desc: "Professional review with detailed feedback and rewrite suggestions.",
      plan249_name: "Resume Rewrite", plan249_desc: "Complete professional rewrite. ATS-optimized. Bilingual delivery.",
      plan549_name: "Premium Career Support", plan549_desc: "Full rewrite + LinkedIn + 1:1 interview coaching session.",
      recommended: "Recommended",
      step5_title: "Consent & checkout",
      step5_sub: "Please confirm the following before we move to payment.",
      consents: [
        "I have read and agree to the Terms of Use and Privacy Policy.",
        "I understand Trabajo Listo provides resume, interview prep, coaching and educational services.",
        "I understand Trabajo Listo is NOT an employer, staffing agency, or recruiting company.",
        "I understand purchasing does not guarantee employment, interviews, offers, income or any specific outcome.",
        "I understand results depend on my experience, skills, language, qualifications and the labor market.",
        "All information I provided is true and current.",
        "I understand refunds may be limited once personalized work has begun, per the refund policy.",
        "I agree to electronic order processing and accept that my consent is legally binding.",
        "I confirm I am of legal age and able to enter into contracts and make payments.",
        "I understand services are delivered on a best-effort basis without guaranteed outcomes."
      ],
      btn_back: "Back", btn_next: "Next →", btn_submit: "Submit", btn_close: "Close",
      step_label: "Step", step_of: "of", complete: "Complete",
      success_title: "You're all set,", default_name: "amigo",
      success_pre: "We received your request for the", success_pkg: "package", success_email_pre: "Our team will email", success_email_post: "within 24 hours with payment details and next steps."
    },
    es: {
      step1_title: "Información de contacto",
      step1_sub: "Empecemos con lo básico. Solo lo usaremos para entregar tu currículum.",
      f_name: "Nombre y apellido", f_email: "Correo electrónico", f_phone: "Teléfono", f_lang: "Idioma preferido",
      step2_title: "Tu situación actual",
      step2_sub: "Esto nos ayuda a entender tu nivel y el trabajo necesario.",
      f_working: "¿Estás trabajando actualmente?",
      working: ["Sí, tiempo completo", "Sí, medio tiempo", "No, buscando activamente", "Planeo buscar"],
      f_industry: "Industria en la que quieres trabajar",
      industry_placeholder: "Selecciona…",
      industry: ["Construcción / Oficios", "Almacén / Logística", "Hostelería / Restaurantes", "Servicio al cliente", "Salud", "Oficina / Administración", "Tecnología / TI", "Otro"],
      f_exp: "Años de experiencia",
      exp: ["Sin experiencia", "Menos de 1 año", "1–3 años", "3–5 años", "Más de 5 años"],
      f_hasResume: "¿Tienes un currículum?",
      hasResume: ["Sí, en inglés", "Sí, en español", "Sí, en ambos", "No"],
      f_english: "Nivel de inglés",
      english: ["Principiante", "Intermedio", "Avanzado", "Fluido"],
      step3_title: "Detalles del currículum",
      step3_sub: "Mientras más detalles compartas, más fuerte será tu currículum.",
      f_title: "Puesto deseado",
      f_skills: "Habilidades clave (separadas por comas)",
      f_education: "Educación", education_ph: "Secundaria, escuela técnica, universidad…",
      f_certs: "Certificaciones o licencias",
      f_jobs: "Últimos 2–3 trabajos (empresa, puesto, fechas, logros)",
      f_strength: "Tu mayor fortaleza", strength_ph: "Confiable, aprende rápido, liderazgo…",
      f_challenge: "¿Cuál es tu mayor desafío en la búsqueda de empleo?",
      challenge: ["Pocas respuestas", "Sin invitaciones a entrevistas", "Currículum se ve poco profesional", "Difícil explicar mi experiencia", "Inglés débil", "Otro"],
      step4_title: "Elige tu paquete",
      step4_sub: "Elige el nivel de soporte que quieras. Recomendamos automáticamente la mejor opción.",
      rec_pre: "Según tus respuestas recomendamos el paquete de", rec_post: ".",
      plan49_name: "Revisión de currículum", plan49_desc: "Revisión profesional con retroalimentación detallada y sugerencias de reescritura.",
      plan249_name: "Reescritura de currículum", plan249_desc: "Reescritura profesional completa. Optimizada para ATS. Entrega bilingüe.",
      plan549_name: "Soporte Premium de carrera", plan549_desc: "Reescritura completa + LinkedIn + sesión 1:1 de coaching de entrevista.",
      recommended: "Recomendado",
      step5_title: "Consentimiento y pago",
      step5_sub: "Por favor confirma lo siguiente antes de pasar al pago.",
      consents: [
        "He leído y acepto los Términos de Uso y la Política de Privacidad.",
        "Entiendo que Trabajo Listo proporciona servicios de currículum, preparación de entrevistas, coaching y educación.",
        "Entiendo que Trabajo Listo NO es un empleador, agencia de personal ni empresa de reclutamiento.",
        "Entiendo que la compra no garantiza empleo, entrevistas, ofertas, ingresos ni ningún resultado específico.",
        "Entiendo que los resultados dependen de mi experiencia, habilidades, idioma, calificaciones y mercado laboral.",
        "Toda la información que proporcioné es verdadera y actual.",
        "Entiendo que los reembolsos pueden ser limitados una vez iniciado el trabajo personalizado.",
        "Acepto el procesamiento electrónico del pedido y que mi consentimiento es legalmente vinculante.",
        "Confirmo que soy mayor de edad y puedo celebrar contratos y realizar pagos.",
        "Entiendo que los servicios se entregan bajo el principio de mejor esfuerzo, sin resultados garantizados."
      ],
      btn_back: "Atrás", btn_next: "Siguiente →", btn_submit: "Enviar", btn_close: "Cerrar",
      step_label: "Paso", step_of: "de", complete: "Completo",
      success_title: "¡Todo listo,", default_name: "amigo",
      success_pre: "Recibimos tu solicitud para el", success_pkg: "paquete", success_email_pre: "Nuestro equipo enviará un correo a", success_email_post: "en 24 horas con los detalles de pago y los próximos pasos."
    }
  };

  var state = { step: 0, data: { lang: "Español" } };
  function curLang() { return state.data.lang === 'English' ? 'en' : 'es'; }
  function L() { return I18N[curLang()]; }

  function esc(v) { return (v == null ? '' : String(v)).replace(/"/g, '&quot;'); }
  function opts(k, list) {
    return '<div class="tl-options">' + list.map(function (o) {
      var sel = state.data[k] === o ? 'is-selected' : '';
      return '<label class="tl-opt ' + sel + '"><input type="radio" name="' + k + '" value="' + esc(o) + '" ' + (state.data[k] === o ? 'checked' : '') + '/> <span>' + o + '</span></label>';
    }).join('') + '</div>';
  }
  function planCard(price, name, desc, isRec) {
    var sel = state.data.plan === price ? 'is-selected' : '';
    return '<div class="tl-plan ' + sel + '" data-plan="' + price + '">' + (isRec ? '<span class="tl-plan-badge">' + L().recommended + '</span>' : '') + '<h4>' + name + '</h4><div class="tl-price">$' + price + '</div><p>' + desc + '</p></div>';
  }
  function consent(k, text) {
    return '<label><input type="checkbox" data-k="' + k + '" ' + (state.data[k] ? 'checked' : '') + '/> <span>' + text + '</span></label>';
  }
  function recommendPlan() {
    var has = (state.data.hasResume || '').toLowerCase();
    var exp = state.data.exp || '';
    var t = L();
    if (has.indexOf('no') === 0) return '549';
    if (exp === t.exp[4] || exp === t.exp[3]) return '249';
    if ((has.indexOf('yes') === 0 || has.indexOf('sí') === 0 || has.indexOf('si') === 0) && (exp === t.exp[1] || exp === t.exp[0])) return '49';
    return '249';
  }

  function makeSteps() {
    var t = L();
    return [
      {
        title: t.step1_title, sub: t.step1_sub,
        render: function () {
          return ''
            + '<div class="tl-field"><label>' + t.f_name + '</label><input type="text" data-k="name" value="' + esc(state.data.name) + '" placeholder="María García"/></div>'
            + '<div class="tl-field"><label>' + t.f_email + '</label><input type="email" data-k="email" value="' + esc(state.data.email) + '" placeholder="email@example.com"/></div>'
            + '<div class="tl-field"><label>' + t.f_phone + '</label><input type="tel" data-k="phone" value="' + esc(state.data.phone) + '" placeholder="(555) 555-5555"/></div>'
            + '<div class="tl-field"><label>' + t.f_lang + '</label>' + opts('lang', ['Español', 'English']) + '</div>';
        },
        valid: function () { return state.data.name && state.data.email && state.data.phone && state.data.lang; }
      },
      {
        title: t.step2_title, sub: t.step2_sub,
        render: function () {
          return ''
            + '<div class="tl-field"><label>' + t.f_working + '</label>' + opts('working', t.working) + '</div>'
            + '<div class="tl-field"><label>' + t.f_industry + '</label>'
            +   '<select data-k="industry"><option value="">' + t.industry_placeholder + '</option>'
            +   t.industry.map(function (o) { return '<option ' + (state.data.industry === o ? 'selected' : '') + '>' + o + '</option>'; }).join('') + '</select></div>'
            + '<div class="tl-field"><label>' + t.f_exp + '</label>' + opts('exp', t.exp) + '</div>'
            + '<div class="tl-field"><label>' + t.f_hasResume + '</label>' + opts('hasResume', t.hasResume) + '</div>'
            + '<div class="tl-field"><label>' + t.f_english + '</label>' + opts('english', t.english) + '</div>';
        },
        valid: function () { return state.data.working && state.data.industry && state.data.exp && state.data.hasResume && state.data.english; }
      },
      {
        title: t.step3_title, sub: t.step3_sub,
        render: function () {
          return ''
            + '<div class="tl-field"><label>' + t.f_title + '</label><input type="text" data-k="title" value="' + esc(state.data.title) + '" placeholder="Warehouse Supervisor"/></div>'
            + '<div class="tl-field"><label>' + t.f_skills + '</label><textarea data-k="skills" placeholder="Forklift, inventory, bilingual, leadership…">' + esc(state.data.skills) + '</textarea></div>'
            + '<div class="tl-field"><label>' + t.f_education + '</label><input type="text" data-k="education" value="' + esc(state.data.education) + '" placeholder="' + t.education_ph + '"/></div>'
            + '<div class="tl-field"><label>' + t.f_certs + '</label><input type="text" data-k="certs" value="' + esc(state.data.certs) + '" placeholder="OSHA 10, CDL Class A, CNA…"/></div>'
            + '<div class="tl-field"><label>' + t.f_jobs + '</label><textarea data-k="jobs" placeholder="2022–2024 · ABC Construction · Foreman">' + esc(state.data.jobs) + '</textarea></div>'
            + '<div class="tl-field"><label>' + t.f_strength + '</label><input type="text" data-k="strength" value="' + esc(state.data.strength) + '" placeholder="' + t.strength_ph + '"/></div>'
            + '<div class="tl-field"><label>' + t.f_challenge + '</label>' + opts('challenge', t.challenge) + '</div>';
        },
        valid: function () { return state.data.title && state.data.skills; }
      },
      {
        title: t.step4_title, sub: t.step4_sub,
        render: function () {
          var rec = recommendPlan();
          state.data.plan = state.data.plan || rec;
          var recName = rec === '49' ? t.plan49_name : rec === '249' ? t.plan249_name : t.plan549_name;
          return '<div class="tl-rec">💡 ' + t.rec_pre + ' <strong>' + recName + '</strong> ' + t.rec_post + '</div>'
            + '<div class="tl-plans">'
            +   planCard('49', t.plan49_name, t.plan49_desc, rec === '49')
            +   planCard('249', t.plan249_name, t.plan249_desc, rec === '249')
            +   planCard('549', t.plan549_name, t.plan549_desc, rec === '549')
            + '</div>';
        },
        valid: function () { return !!state.data.plan; }
      },
      {
        title: t.step5_title, sub: t.step5_sub,
        render: function () {
          return '<div class="tl-consents">' + t.consents.map(function (c, i) { return consent('c' + (i + 1), c); }).join('') + '</div>';
        },
        valid: function () { return ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10'].every(function (k) { return state.data[k]; }); }
      }
    ];
  }

  function render() {
    var t = L();
    var steps = makeSteps();
    var isLast = state.step >= steps.length;
    var body = document.getElementById('tl-body');
    var fill = document.getElementById('tl-progress-fill');
    var label = document.getElementById('tl-step-label');
    var back = document.getElementById('tl-back');
    var next = document.getElementById('tl-next');
    back.textContent = t.btn_back;
    if (isLast) {
      body.innerHTML = '<div class="tl-success"><div class="tl-check">✓</div><h3>' + t.success_title + ' ' + esc(state.data.name || t.default_name) + (curLang() === 'es' ? '!' : '!') + '</h3><p class="tl-sub">' + t.success_pre + ' <strong>$' + state.data.plan + ' ' + t.success_pkg + '</strong>. ' + t.success_email_pre + ' <strong>' + esc(state.data.email) + '</strong> ' + t.success_email_post + '</p></div>';
      fill.style.width = '100%';
      label.textContent = t.complete;
      back.style.display = 'none';
      next.textContent = t.btn_close;
      next.dataset.action = 'close';
      return;
    }
    var s = steps[state.step];
    body.innerHTML = '<h3>' + s.title + '</h3><p class="tl-sub">' + s.sub + '</p>' + s.render();
    fill.style.width = ((state.step + 1) / steps.length * 100) + '%';
    label.textContent = t.step_label + ' ' + (state.step + 1) + ' ' + t.step_of + ' ' + steps.length;
    back.style.display = state.step === 0 ? 'none' : '';
    next.textContent = state.step === steps.length - 1 ? t.btn_submit : t.btn_next;
    next.dataset.action = '';
    next.disabled = !s.valid();
    body.querySelectorAll('input[data-k],textarea[data-k],select[data-k]').forEach(function (el) {
      var h = function () {
        state.data[el.dataset.k] = el.type === 'checkbox' ? el.checked : el.value;
        next.disabled = !s.valid();
      };
      el.addEventListener('input', h);
      el.addEventListener('change', h);
    });
    body.querySelectorAll('input[type=radio]').forEach(function (el) {
      el.addEventListener('change', function () {
        state.data[el.name] = el.value;
        render();
      });
    });
    body.querySelectorAll('.tl-plan').forEach(function (el) {
      el.addEventListener('click', function () {
        state.data.plan = el.dataset.plan;
        render();
      });
    });
  }

  function open() {
    state.step = 0;
    document.body.style.overflow = 'hidden';
    document.getElementById('tl-modal').classList.add('is-open');
    render();
  }
  function close() {
    document.getElementById('tl-modal').classList.remove('is-open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-open-form]').forEach(function (b) {
    b.addEventListener('click', function (e) { e.preventDefault(); open(); });
  });
  document.getElementById('tl-close').addEventListener('click', close);
  document.getElementById('tl-modal').addEventListener('click', function (e) { if (e.target.id === 'tl-modal') close(); });
  document.getElementById('tl-back').addEventListener('click', function () { if (state.step > 0) { state.step--; render(); } });
  document.getElementById('tl-next').addEventListener('click', function () {
    var btn = document.getElementById('tl-next');
    if (btn.dataset.action === 'close') { close(); return; }
    state.step++;
    render();
  });
})();

// Typewriter for hero
(function(){
  function startTypewriter(){
    var el = document.querySelector('.tl-typewriter');
    if (!el || el.dataset.started) return;
    el.dataset.started = '1';
    var words;
    try { words = JSON.parse(el.getAttribute('data-words') || '[]'); } catch(e) { words = []; }
    if (!words.length) return;
    var i = 0, j = 0, deleting = false;
    function tick(){
      var w = words[i];
      if (!deleting) {
        j++;
        el.textContent = w.slice(0, j);
        if (j >= w.length) { deleting = true; setTimeout(tick, 1600); return; }
        setTimeout(tick, 80);
      } else {
        j--;
        el.textContent = w.slice(0, j);
        if (j <= 0) { deleting = false; i = (i + 1) % words.length; setTimeout(tick, 220); return; }
        setTimeout(tick, 40);
      }
    }
    setTimeout(tick, 800);
  }
  startTypewriter();
  setTimeout(startTypewriter, 300);
})();
