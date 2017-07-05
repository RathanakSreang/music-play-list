export default function reducer(state={
    touched: false,
    minangle: 0,
    maxangle: 270
  }, action) {
  switch(action.type) {
    case "TOUCH_VALUME_PANEL": {
      return {...state, touched: action.payload}
    }
  }
  return state;
}