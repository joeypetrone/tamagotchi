
let fun = 70;

const getFunScore = () => fun;

const setFunScore = (playNum) => {
  if (playNum + fun > 100) {
    fun = 100;
  } else if (playNum + fun < 0) {
    fun = 0;
  } else {
    fun += playNum;
  }
};

export default { getFunScore, setFunScore };
