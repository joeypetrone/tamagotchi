
let strength = 70;

const getStrengthScore = () => strength;

const setStrengthScore = (fightNum) => {
  if (fightNum + strength > 100) {
    strength = 100;
  } else if (fightNum + strength < 0) {
    strength = 0;
  } else {
    strength += fightNum;
  }
};

export default { getStrengthScore, setStrengthScore };
