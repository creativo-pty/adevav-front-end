'use strict';

module.exports = (ngModule) => {
  ngModule.controller('blogCtrl', blogCtrl);

  function blogCtrl() {
    this.posts = [{
      title: 'Reseña Histórica',
      link: '/',
      author: {
        name: 'ADEVAV Webmaster',
        link: '/',
        categories: ['Historia']
      },
      datePublished: '2004-07-02',
      text: 'La Asociación de Esposas de Veteranos y Amigas Voluntarias surge a raíz de la inquietud de la primera presidenta de la Asociación, Mariela Araúz de Lord, de agrupar en una Asociación a las esposas de Norteamericanos o Veteranos de Guerra de las Fuerzas Armadas de Estados Unidos (VFW), residentes en Panamá, para desarrollar e implementar el […]',
      id: 1
    }];
    this.projects = [];
  }
};
