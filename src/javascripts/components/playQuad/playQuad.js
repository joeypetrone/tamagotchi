import playData from '../../helpers/data/playData';
import utils from '../../helpers/utils';
import './playQuad.scss';

const playQuadBuilder = () => {
  const funScore = playData.getFunScore();
  let domString = '';

  domString += '<h1><i class="fas fa-running"></i></h1>';
  domString += '<h5>Play</h5>';
  domString += `<h6>Fun Score: ${funScore}</h6>`;
  domString += '<button id="super-fun-btn">Super Fun</button><button id="slightly-fun-btn">Slightly Fun</button>';

  utils.printToDom('play', domString);
};

export default { playQuadBuilder };
