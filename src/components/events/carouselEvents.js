import $ from 'jquery';

const headCarouselEvents = () => {
  $('#head-carousel').on('slide.bs.carousel', (evt) => {
    console.log(evt.relatedTarget);
  });
};

const torsoCarouselEvents = () => {
  $('#torso-carousel').on('slide.bs.carousel', (evt) => {
    console.log(evt.relatedTarget);
  });
};

const legCarouselEvents = () => {
  $('#leg-carousel').on('slide.bs.carousel', (evt) => {
    console.log(evt.relatedTarget);
  });
};

const loadCarouselEvents = () => {
  headCarouselEvents();
  torsoCarouselEvents();
  legCarouselEvents();
};

export default loadCarouselEvents;
