const initialState = {
  chosenNumbers: [],
  boxNumbers:[]
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "choose":
      return  {
        ...state,
        chosenNumbers: state.chosenNumbers.concat(action.number),
      }
      case "boxNumbers":
        return (Object.assign(state , ...state.boxNumbers = action.numbers))
        case "deleteFromBoard":
        return (Object.assign(state , ...state.boxNumbers = action.newBoard))
    default:
      return state;
  }
};
