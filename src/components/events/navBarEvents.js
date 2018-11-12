import $ from 'jquery';
import legoCharacter from '../LegoCharacter/legoCharacter';

const randomBtnEvent = () => {
  $('#random-btn').on('click', () => {
    legoCharacter.createRandomCharacter();
  });
};

export default randomBtnEvent;
