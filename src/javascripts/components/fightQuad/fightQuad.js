import fightData from '../../helpers/data/fightData';
import utils from '../../helpers/utils';
import './fightQuad.scss';

const fightQuadBuilder = () => {
  const strengthScore = fightData.getStrengthScore();
  let domString = '';

  domString += '<h1><i class="fas fa-fist-raised"></i></h1>';
  domString += '<h5>Fight</h5>';
  domString += `<h6>Strength Score: ${strengthScore}</h6>`;
  domString += '<button id="run-away-btn">Run Away</button><button id="violence-btn">Violence</button>';

  utils.printToDom('fight', domString);
};

export default { fightQuadBuilder };
