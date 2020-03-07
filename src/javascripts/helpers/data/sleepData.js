
let energy = 50;

const getEnergyScore = () => energy;

const setEnergyScore = (sleepNum) => {
  if (sleepNum + energy > 100) {
    energy = 100;
  } else if (sleepNum + energy < 0) {
    energy = 0;
  } else {
    energy += sleepNum;
  }
};

export default { getEnergyScore, setEnergyScore };
