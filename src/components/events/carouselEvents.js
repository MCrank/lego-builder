import $ from 'jquery';
import helpers from '../helpers/helpers';

const headCarouselEvents = () => {
  $('#head-carousel').on('slide.bs.carousel', (evt) => {
    const caseHeadName = helpers.capFirstChar(evt.relatedTarget.getAttribute('data-name'));
    $('#head-name').html(caseHeadName);
  });
};

const torsoCarouselEvents = () => {
  $('#torso-carousel').on('slide.bs.carousel', (evt) => {
    const caseTorsoName = evt.relatedTarget.getAttribute('data-name');
    $('#torso-name').html(caseTorsoName);
  });
};

const legCarouselEvents = () => {
  $('#leg-carousel').on('slide.bs.carousel', (evt) => {
    const caseLegName = evt.relatedTarget.getAttribute('data-name');
    $('#leg-name').html(caseLegName);
  });
};

const loadCarouselEvents = () => {
  headCarouselEvents();
  torsoCarouselEvents();
  legCarouselEvents();
};

export default loadCarouselEvents;
