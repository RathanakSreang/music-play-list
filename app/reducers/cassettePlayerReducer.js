export default function reducer(state={
    songs: [],
    isPlaying: false,
    isPause: false,
    isLoading: false,
    currentSongIndex: -1,
    totalSong: 0,
    volume: 0.5,
    speed: 0.0,
    rotation: 'rotateLeft',
    isShowPlayList: false,
    isLooped: true,
    isSoundOn: true
  }, action) {

  switch (action.type) {
    case "FETCH_SONGS": {
      let songs = action.payload;
      return {...state, songs: songs, totalSong: songs.length, currentSongIndex: 0}
    }
    case "TOGGLE_SONG_LIST": {
      return {...state, isShowPlayList: !state.isShowPlayList}
    }
    case "TOGGLE_PLAY_SONG": {
      if(state.isPlaying && !state.isPause) {
        return {...state, isPause: true, isPlaying: false}
      } else {
        return {...state, isPause: false, isPlaying: true, speed: 2.0, rotation: 'rotateLeft'}
      }
    }
    case "STOP_SONG": {
      return {...state, duration: 0, isPlaying: false, isPause: false}
    }
    case "TOGGLE_PAUSE_SONG": {
      return {...state, isPause: !state.isPause}
    }
    case "SELECT_SONG": {
      return {...state, duration: 0, isPlaying: true, isPause: false, currentSongIndex: action.payload}
    }
    case "PLAY_SONG": {
      return {...state, isPause: false, isPlaying: true, speed: 2.0, rotation: 'rotateLeft'}
    }
    case "LOADING_SONG": {
      return {...state, isLoading: true}
    }
    case "LOADING_SONG_COMPLETED": {
      return {...state, isLoading: false, duration: action.payload}
    }
    case "STOP_PLAYING_ANIMATION": {
      return {...state, speed: 0}
    }
    case "STOP_PLAYING": {
      return {...state, speed: 0, seek: 0, isPlaying: false}
    }
    case "UPDATE_SONG_INDEX": {
      return {...state, duration: 0, currentSongIndex: action.payload}
    }
    case "UPDATE_SEEK": {
      return {...state, seek: action.payload}
    }
    case "UPDATE_VALUME": {
      return {...state, volume: action.payload}
    }
    case "TOGGLE_SOUND_BTN": {
      return {...state, isSoundOn: !state.isSoundOn}
    }
    case "TOGGLE_PLAY_LOOP": {
      return {...state, isLooped: !state.isLooped}
    }
  }
  return state
}