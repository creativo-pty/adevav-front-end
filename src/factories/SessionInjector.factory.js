'use strict';

module.exports = (ngModule) => {
  ngModule.factory('SessionInjector', SessionInjector);

  SessionInjector.$inject = ['AuthService', 'toaster'];

  function SessionInjector(AuthService, toaster) {
    return {
      request: (config) => {
        angular.element(document.querySelector('#loader')).removeClass('hide');
        if (AuthService.isLoggedIn()) {
          config.headers['Authorization'] = AuthService.getAuthorizationToken();
        }
        if (config.data) {
          for (const name in config.data) {
            if (config.data[name] === null) {
              delete config.data[name];
            }
          }
        }
        if (config.params) {
          if (config.method === 'POST' || config.method === 'PUT') {
            //EVERY POST REQUEST WILL BE HANDLED WITH JSON
            if (!config.headers['Content-Type'] && !config.headers['persist']) {
              config.headers['Content-Type'] = 'application/json';
            }
            if (config.headers['persist']) {
              delete config.headers['persist'];
            }
            //$RESOURCE ALWAYS APPENDS THE BODY AS QUERY PARAMS AND THAT'S NOT THE INTENDED DESIGN
            //THEREFORE WE GET THE ARRAY IN THE QUERY PARAMS AND BUILD A JSON AS THE PAYLOAD
            for (const name in config.params) {
              //THE REASON WE ARE AVOIDING STRICTLY null VALUES ARE BECAUSE THE API CURRENTLY RECEIVES THE PAYLOAD
              //AND INSTEAD OF IGNORING null VALUES, IT BELIEVES THE VALUE TO BE SET IS ACTUALLY null WHICH TRIGGERS VALIDATION
              //ERRORS
              if (config.params[name] !== null) {
                config.data[name] = config.params[name];
              }
            }
            //WE ELIMINATE QUERY PARAMS THAT NOW FORM THE BODY OF THE REQUEST
            config.params = {};
          }
          if (config.method === 'GET') {
            const params = {};
            for (const name in config.params) {
              //We append an empty array to make the value on params a string to then effectively match its length
              //On cases where the values were numbers, it would give false positives
              if (('' + config.params[name]).length && config.params[name] !== null) {
                params[name] = config.params[name];
              }
            }
            config.params = params;
          }
        }
        return config;
      },
      response: (response) => {
        if (response.status) {
          angular.element(document.querySelector('#loader')).addClass('hide');
        }
        return response;
      },
      responseError: (response) => {
        angular.element(document.querySelector('#loader')).addClass('hide');

        if (response.status === 400) {
          if (response.data.data && response.data.data.message) {
            const count = (response.data.data.message.match(/\[/g) || []).length;
            if (count !== 0) {
              if (count > 1) {
                const openIndexes = [];
                const closeIndexes = [];
                for (let i = 0; i < response.data.data.message.length; i++) {
                  if (response.data.data.message[i] === '[') {
                    openIndexes.push(i);
                  }
                  if (response.data.data.message[i] === ']') {
                    closeIndexes.push(i);
                  }
                }
                response.data.data.message = response.data.data.message.substring((openIndexes[(openIndexes.length - 1)] + 1), closeIndexes[0]);
                return response;
              }
              response.data.data.message = response.data.data.message.match(/\[(.*?)\]/)[1];
            }
          }
          return response;

        } else if (response.status === 401) {
          if (AuthService.isLoggedIn()) {
            AuthService.logout();
            toaster.pop('error', 'Error', 'Your session expired. Please sign in again.');
            return response;
          }

          toaster.pop('error', response.data.error, response.data.message);
          return response;
        }

        return response;
      }
    };
  }
};
