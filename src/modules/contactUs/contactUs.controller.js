'use strict';

module.exports = (ngModule) => {
  ngModule.controller('contactUsCtrl', contactUsCtrl);

  contactUsCtrl.$inject = ['$stateParams', 'UserService'];

  function contactUsCtrl($stateParams, UserService) {
    this.associates = [];
    this.contact = {};

    UserService.listAssociates()
    .then((associates) => {
      this.associates = associates;
      this.contact.associate = associates.find(({ id }) => {
        return $stateParams.associateId === id;
      });
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
