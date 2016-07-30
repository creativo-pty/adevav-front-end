'use strict';

module.exports = (ngModule) => {
  ngModule.controller('contactUsCtrl', contactUsCtrl);

  contactUsCtrl.$inject = ['$stateParams'];

  function contactUsCtrl($stateParams) {
    // TODO: Factory and model to query associates.
    this.associates = [{
      id: 0,
      name: 'ADEVAV',
      email: 'contacto@adevav.com'
    }, {
      id: 1,
      name: 'ADEVAV Webmaster',
      email: 'webmaster@adevav.org'
    }, {
      id: 2,
      name: 'John Doe',
      email: ''
    }];

    this.contact = {};

    this.contact.associate = this.associates.find((associate) => {
      return associate.id === $stateParams.associateId;
    });

    this.resetForm = (form) => {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      this.contact = {};
    };

    // TODO: Create a submit function
    this.submitForm = (form) => {
      // TODO: Create a toast (Angular Material) for when the server responds
      // Exito: Su mensaje fue enviado exitosamente. Muchas gracias por su
      // aporte y espera una respuesta pronto.
      // Fallo: Lo sentimos mucho. Su mensaje no fue enviado exitosamente. Por
      // favor intente enviarlo nuevamente.
      console.log(this.contact);
    };
  }
};
