export const choseNumber = (type, randomNum) => {
  return {
    type: type,
    number: randomNum
  };
};


export const boxChosenNumbers = (type, randomNum) => {
  return {
    type: type,
    numbers: randomNum
  };
};

export const deleteFromBoard = (type , newBoard)=>{
  return {
    type,
    newBoard
  }
}