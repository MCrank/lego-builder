import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import helpers from './components/helpers/helpers';
import legoCharacter from './components/LegoCharacter/legoCharacter';
import partsData from './data/partsData';
import loadCarouselEvents from './components/events/carouselEvents';
import randomBtnEvent from './components/events/navBarEvents';
// import './components/SavedCharacters/savedCharacters';

const initApp = () => {
  randomBtnEvent();
  loadCarouselEvents();
  partsData
    .getLegoHeads()
    .then((heads) => {
      legoCharacter.loadHeadCarousel(heads.data);
      $(`#head${helpers.randomNum(heads.data.length)}`).addClass('active');
      $('#head-name').html($('.head-carousel-item.active').attr('data-name'));
    })
    .catch((error) => {
      console.error(error);
    });

  partsData
    .getLegoTorsos()
    .then((torsos) => {
      legoCharacter.loadTorsoCarousel(torsos.data);
      $(`#torso${helpers.randomNum(torsos.data.length)}`).addClass('active');
      $('#torso-name').html($('.torso-carousel-item.active').attr('data-name'));
    })
    .catch((error) => {
      console.error(error);
    });

  partsData
    .getLegoLegs()
    .then((legs) => {
      legoCharacter.loadLegCarousel(legs.data);
      $(`#leg${helpers.randomNum(legs.data.length)}`).addClass('active');
      $('#leg-name').html($('.leg-carousel-item.active').attr('data-name'));
    })
    .catch((error) => {
      console.error(error);
    });
};

initApp();
