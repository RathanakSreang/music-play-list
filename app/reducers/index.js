import { combineReducers } from "redux";

import board from "./boardReducer";
import cassette_player from "./cassettePlayerReducer";
import volume_panel from "./volumePanelReducer";

export default combineReducers({
  board,
  cassette_player,
  volume_panel,
})