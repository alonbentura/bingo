
export const choseNumber = () => {

  const randomNum = Math.floor(Math.random() * 100) + 1;
  return {
    
    type: 'choose',
    number: randomNum
  }
}
