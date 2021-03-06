import $ from 'jquery';
import 'bootstrap';
import './legoCharacter.scss';
import helpers from '../helpers/helpers';

const loadHeadCarousel = (headsArr) => {
  let newHeadString = '';
  headsArr.forEach((head) => {
    newHeadString += `
    <div class="carousel-item head-carousel-item" data-name="${head.name}" id="${head.id}">
      <img
        class="d-block w-100"
        src="${head.imageUrl}"
      />
    </div>
    `;
  });
  $('#head-carousel-inner').append(newHeadString);
};

const loadTorsoCarousel = (torsosArr) => {
  let newHeadString = '';
  torsosArr.forEach((torso) => {
    newHeadString += `
    <div class="carousel-item torso-carousel-item" data-name="${torso.name}" id="${torso.id}">
      <img
        class="d-block w-100"
        src="${torso.imageUrl}"
      />
    </div>
    `;
  });
  $('#torso-carousel-inner').append(newHeadString);
};

const loadLegCarousel = (legsArr) => {
  let newHeadString = '';
  legsArr.forEach((leg) => {
    newHeadString += `
    <div class="carousel-item leg-carousel-item" data-name="${leg.name}" id="${leg.id}">
      <img
        class="d-block w-100"
        src="${leg.imageUrl}"
      />
    </div>
    `;
  });
  $('#leg-carousel-inner').append(newHeadString);
};

const createRandomCharacter = () => {
  const headRandom = helpers.randomNum($('#head-carousel-inner').children().length);
  const torsoRandom = helpers.randomNum($('#torso-carousel-inner').children().length);
  const legRandom = helpers.randomNum($('#leg-carousel-inner').children().length);
  $('#head-carousel').carousel(headRandom);
  $('#torso-carousel').carousel(torsoRandom);
  $('#leg-carousel').carousel(legRandom);
};

export default {
  loadHeadCarousel,
  loadTorsoCarousel,
  loadLegCarousel,
  createRandomCharacter,
};
