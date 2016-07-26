'use strict';

module.exports = (ngModule) => {
  ngModule.filter('toString', () => {
    return (array) => {
      let result = '';
      for (const index in array) {
        result += `${array[index]}, `;
      }
      return result.slice(0, -2);
    };
  });
};
