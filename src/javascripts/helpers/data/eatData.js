
let full = 100;

const getFullScore = () => full;

const setFullScore = (eatNum) => {
  if (eatNum + full > 100) {
    full = 100;
  } else if (eatNum + full < 0) {
    full = 0;
  } else {
    full += eatNum;
  }
};

export default { getFullScore, setFullScore };
