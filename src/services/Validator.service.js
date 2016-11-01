'use strict';

module.exports = (ngModule) => {
  ngModule.service('ValidatorService', ValidatorService);

  function ValidatorService() {

    function isEmailValid(email) {
      const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return regex.test(email);
    }

    function isFormValid(inputs) {
      let validInputs = 0;

      inputs.forEach((input) => {
        switch (input.type.toLowerCase()) {
          case 'email':
            validInputs += isEmailValid(input.value) ? 1 : 0;
            break;
          case 'input':
            validInputs += isInputValid(input.value) ? 1 : 0;
            break;
        }
      });

      return inputs.length === validInputs;
    };

    function isInputValid(input) {
      if (typeof input !== 'undefined' && input !== null) {
        if (typeof input !== 'object') {
          return input.length > 0;
        }
        return true;
      }
      return false;
    }

    return {
      isFormValid
    };
  }
};
