export default function reducer(state={
    touched: false,
  }, action) {
  switch(action.type) {
    case "TOUCH_VALUME_BAR": {
      return {...state, touched: action.payload}
    }
  }
  return state;
}