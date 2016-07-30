'use strict';

module.exports = (ngModule) => {
  ngModule.controller('contactUsCtrl', contactUsCtrl);

  function contactUsCtrl() {
    // TODO: Factory and model to query associates.
    this.associates = [{
      id: 1,
      name: 'ADEVAV',
      email: 'contacto@adevav.com'
    }, {
      id: 2,
      name: 'ADEVAV Webmaster',
      email: 'webmaster@adevav.org'
    }, {
      id: 3,
      name: 'John Doe',
      email: ''
    }];

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
