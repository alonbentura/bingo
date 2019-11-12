const chosenNumbers = [];

export const reducer = (state = chosenNumbers, action) => {
  switch (action.type) {
    case "choose":
      return [...state, action.number];

    default:
      return state;
  }
};
