'use strict';

module.exports = (ngModule) => {
  ngModule.controller('associatesCtrl', associatesCtrl);

  function associatesCtrl() {
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

    this.associates.forEach((associate) => {
      if (!associate.avatar) {
        associate.avatar = require('../../img/anonymous.png');
      }
    });
  }
};
