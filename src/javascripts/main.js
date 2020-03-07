import '../styles/main.scss';
import eatQuad from './components/eatQuad';
import eatData from './helpers/data/eatData';
import playQuad from './components/playQuad';
import playData from './helpers/data/playData';

const addToFullScore = () => {
  eatData.setFullScore(10);
  eatQuad.eatQuadBuilder();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  eatQuad.eatQuadBuilder();
};

const addSuperFun = () => {
  playData.setFunScore(50);
  playQuad.playQuadBuilder();
};

const addSlightlyFun = () => {
  playData.setFunScore(2);
  playQuad.playQuadBuilder();
};

const init = () => {
  eatQuad.eatQuadBuilder();
  playQuad.playQuadBuilder();
  $('#eat').on('click', '#healthy-food-btn', addToFullScore);
  $('#eat').on('click', '#unhealthy-food-btn', subFromFullScore);
  $('#play').on('click', '#super-fun-btn', addSuperFun);
  $('#play').on('click', '#slightly-fun-btn', addSlightlyFun);
};

init();
