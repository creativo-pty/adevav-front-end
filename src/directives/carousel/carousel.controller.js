'use strict';

module.exports = (ngModule) => {
  ngModule.controller('carouselCtrl', carouselCtrl);

  function carouselCtrl() {
    this.interval = 5000;
    this.noWrapSlides = false;
    this.active = 0;

    this.slides = [{
      image: require('../../img/paso_blanco.jpg'),
      title: 'Paso Blanco, Panamá',
      text: 'El Doctor Holdes instruye a los pacientes sobre el procedimiento para ser atendido.'
    }, {
      image: require('../../img/santa_fe.jpg'),
      title: 'Santa Fe, Darién',
      text: 'Una de las socias le toma la presión a un paciente.'
    }, {
      image: require('../../img/los_santos.jpg'),
      title: 'Llano de Piedra, Los Santos',
      text: 'Cierre de la gira'
    }, {
      image: require('../../img/sabana_grande.jpg'),
      title: 'Sabana Grande, Los Santos',
      text: 'El equipo de oftalmología de la gira de MEDRETE.'
    }, {
      image: require('../../img/chiriqui.jpg'),
      title: 'Sabana Grande, Los Santos',
      text: 'El equipo de odontología de la gira de MEDRETE.'
    }];
  }
};
