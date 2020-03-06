import '../styles/main.scss';
import eatQuad from './components/eatQuad';
import eatData from './helpers/data/eatData';

const addToFullScore = () => {
  eatData.setFullScore(10);
  eatQuad.eatQuadBuilder();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  eatQuad.eatQuadBuilder();
};

const init = () => {
  eatQuad.eatQuadBuilder();
  $('#eat').on('click', '#healthy-food-btn', addToFullScore);
  $('#eat').on('click', '#unhealthy-food-btn', subFromFullScore);
};

init();
