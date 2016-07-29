'use strict';

module.exports = (ngModule) => {
  ngModule.controller('aboutUsCtrl', aboutUsCtrl);

  function aboutUsCtrl() {
    this.page = {
      id: 1,
      title: 'Sobre Nosotros',
      content: `
        <p style="text-align: center;">
          <a href="/img/uploads/2013/08/el_grupo.jpg">
            <img class="aligncenter wp-image-35" alt="Asociación de Esposas de Veteranos y Amigas Voluntarias" src="/img/uploads/2013/08/el_grupo-300x139.jpg" width="694" height="323" />
          </a>
        </p>
        <p>La Asociación de Esposas de Veteranos y Amigas Voluntarias (ADEVAV), Organización No Gubernamental Benéfica, les da la más cordial bienvenida a su sitio web, realizado con el propósito de que las personas que nos visiten, puedan obtener información sobre la labor social que realiza la asociación e igualmente puedan interactuar vía virtual con sus asociadas.</p>
        <h1>Misión</h1>
        <p>La Asociación de Esposa de Veteranos y Amigas Voluntarias (ADEVAV), basada en el ideal de hermandad entre los pueblos, brinda a través de sus voluntarias servicios de asistencia social en misiones benéficas internacionales y nacionales con mucho profesionalismo y calidez humana, de igual manera promueve y organiza programas para la participación e integración del adulto mayor en diversas actividades culturales, educativas y recreativas, con el propósito de que tengan una mejor calidad de vida emocional y afectiva.</p>
        <h1>Visión</h1>
        <p>Ser una Organización Benéfica trascendente, que promueva las buenas relaciones de hermandad entre Panamá y los Estados Unidos de Norteamérica y lograrlo a través del desarrollo y promoción de programas integrales con recursos humanos voluntarios, enfocándose en los adultos mayores, proporcionándoles una asistencia social, cultural y recreativa, de tal manera que esta labor sirva de buen ejemplo a otros sectores de la sociedad panameña.</p>
      `
    };
  }
};
