// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import './components/LegoCharacter/legoCharacter';
import './components/SavedCharacters/savedCharacters';
import partsData from './data/partsData';

const initApp = () => {
  partsData
    .getLegoHeads()
    .then((heads) => {
      console.log('Heads: ', heads.data);
    })
    .catch((error) => {
      console.error(error);
    });

  partsData
    .getLegoTorsos()
    .then((torsos) => {
      console.log('Torsos:', torsos.data);
    })
    .catch((error) => {
      console.error(error);
    });

  partsData
    .getLegoLegs()
    .then((legs) => {
      console.log('Legs: ', legs.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

initApp();
