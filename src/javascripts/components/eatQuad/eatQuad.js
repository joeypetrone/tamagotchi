import eatData from '../../helpers/data/eatData';
import utils from '../../helpers/utils';
import './eatQuad.scss';

const eatQuadBuilder = () => {
  const fullness = eatData.getFullScore();
  let domString = '';

  domString += '<h1><i class="fas fa-cookie-bite"></i></h1>';
  domString += '<h5>Eat</h5>';
  domString += `<h6>Full Score: ${fullness}</h6>`;
  domString += '<button id="healthy-food-btn">Healthy Food</button><button id="unhealthy-food-btn">Unhealthy Food</button>';

  utils.printToDom('eat', domString);
};

export default { eatQuadBuilder };
