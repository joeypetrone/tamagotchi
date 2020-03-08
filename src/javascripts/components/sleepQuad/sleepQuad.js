import sleepData from '../../helpers/data/sleepData';
import utils from '../../helpers/utils';
import './sleepQuad.scss';

const sleepQuadBuilder = () => {
  const energyScore = sleepData.getEnergyScore();
  let domString = '';

  domString += '<h1><i class="fas fa-bed"></i></h1>';
  domString += '<h5>Sleep</h5>';
  domString += `<h6>Energy Score: ${energyScore}</h6>`;
  domString += '<button id="nap-btn">Nap</button><button id="deep-slumber-btn">Deep Slumber</button>';

  utils.printToDom('sleep', domString);
};

export default { sleepQuadBuilder };
