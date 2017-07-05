import { combineReducers } from "redux";

import board from "./boardReducer";
import cassette_player from "./cassettePlayerReducer";
import volume_panel from "./volumePanelReducer";
import volume_bar from "./volumeBarReducer";

export default combineReducers({
  board,
  cassette_player,
  volume_panel,
  volume_bar
})