import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoCharacter from './components/LegoCharacter/legoCharacter';
import './components/SavedCharacters/savedCharacters';
import partsData from './data/partsData';

const initApp = () => {
  partsData
    .getLegoHeads()
    .then((heads) => {
      legoCharacter.loadHeadCarousel(heads.data);
      $('#head1').addClass('active');
    })
    .catch((error) => {
      console.error(error);
    });

  partsData
    .getLegoTorsos()
    .then((torsos) => {
      legoCharacter.loadTorsoCarousel(torsos.data);
      $('#torso1').addClass('active');
    })
    .catch((error) => {
      console.error(error);
    });

  partsData
    .getLegoLegs()
    .then((legs) => {
      legoCharacter.loadLegCarousel(legs.data);
      $('#leg1').addClass('active');
    })
    .catch((error) => {
      console.error(error);
    });
};

initApp();
