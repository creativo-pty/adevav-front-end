'use strict';

module.exports = (ngModule) => {
  ngModule.service('ValidatorService', ValidatorService);

  function ValidatorService() {

    function isEmailValid(email) {
      const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
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
