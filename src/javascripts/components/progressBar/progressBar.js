import eatData from '../../helpers/data/eatData';
import fightData from '../../helpers/data/fightData';
import playData from '../../helpers/data/playData';
import sleepData from '../../helpers/data/sleepData';
import utils from '../../helpers/utils';
import './progressBar.scss';

const currentProgress = (id, score) => {
  const scorePercent = score / 4;
  $(`div#${id}`).width(`${scorePercent}%`);
};

const progressBarBuilder = () => {
  const fullScore = eatData.getFullScore();
  const strengthScore = fightData.getStrengthScore();
  const funScore = playData.getFunScore();
  const energyScore = sleepData.getEnergyScore();

  let domString = '';

  domString += '<div id="progress-title">';
  domString += '<h3>Health</h3>';
  domString += '</div>';
  domString += '<div id="progress-bar">';
  domString += '<div id="fullness-bar"></div><div id="strength-bar"></div><div id="fun-bar"></div><div id="energy-bar"></div>';
  domString += '</div>';

  utils.printToDom('progress', domString);

  currentProgress('fullness-bar', fullScore);
  currentProgress('fun-bar', funScore);
  currentProgress('strength-bar', strengthScore);
  currentProgress('energy-bar', energyScore);
};

export default { progressBarBuilder };
