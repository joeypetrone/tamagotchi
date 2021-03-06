import '../styles/main.scss';
import eatQuad from './components/eatQuad/eatQuad';
import eatData from './helpers/data/eatData';
import playQuad from './components/playQuad/playQuad';
import playData from './helpers/data/playData';
import fightQuad from './components/fightQuad/fightQuad';
import fightData from './helpers/data/fightData';
import sleepQuad from './components/sleepQuad/sleepQuad';
import sleepData from './helpers/data/sleepData';
import progressBar from './components/progressBar/progressBar';

const quadLoader = () => {
  eatQuad.eatQuadBuilder();
  playQuad.playQuadBuilder();
  fightQuad.fightQuadBuilder();
  sleepQuad.sleepQuadBuilder();
  progressBar.progressBarBuilder();
};

const addToFullScore = () => {
  eatData.setFullScore(10);
  quadLoader();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  quadLoader();
};

const addSuperFun = () => {
  playData.setFunScore(50);
  quadLoader();
};

const addSlightlyFun = () => {
  playData.setFunScore(2);
  quadLoader();
};

const addToStrengthScore = () => {
  fightData.setStrengthScore(1);
  quadLoader();
};

const subFromStrengthScore = () => {
  fightData.setStrengthScore(-10);
  quadLoader();
};

const addNap = () => {
  sleepData.setEnergyScore(50);
  quadLoader();
};

const addDeepSlumber = () => {
  sleepData.setEnergyScore(60);
  quadLoader();
};

const buttonEvents = () => {
  $('#eat').on('click', '#healthy-food-btn', addToFullScore);
  $('#eat').on('click', '#unhealthy-food-btn', subFromFullScore);
  $('#play').on('click', '#super-fun-btn', addSuperFun);
  $('#play').on('click', '#slightly-fun-btn', addSlightlyFun);
  $('#fight').on('click', '#run-away-btn', addToStrengthScore);
  $('#fight').on('click', '#violence-btn', subFromStrengthScore);
  $('#sleep').on('click', '#nap-btn', addNap);
  $('#sleep').on('click', '#deep-slumber-btn', addDeepSlumber);
};

const init = () => {
  progressBar.progressBarBuilder();
  quadLoader();
  buttonEvents();
};

init();
