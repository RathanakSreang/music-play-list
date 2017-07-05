export function fetchSongs(songId) {
  return {
    type: "FETCH_SONGS",
    payload: [
      {url: 'mp3/like.mp3'},
      {url: 'mp3/BlankKyt_RSPN.ogg'},
      {url: 'mp3/BlankKytt_ThursdaySnowReprise.mp3'},
      {url: 'mp3/BlueDucks_FourFlossFiveSix.mp3'},
      {url: 'mp3/like.mp3'},
      {url: 'mp3/BlankKyt_RSPN.ogg'},
      {url: 'mp3/BlankKytt_ThursdaySnowReprise.mp3'},
      {url: 'mp3/BlueDucks_FourFlossFiveSix.mp3'},
      {url: 'mp3/like.mp3'},
      {url: 'mp3/BlankKyt_RSPN.ogg'},
      {url: 'mp3/BlankKytt_ThursdaySnowReprise.mp3'},
      {url: 'mp3/BlueDucks_FourFlossFiveSix.mp3'},
      {url: 'mp3/like.mp3'},
      {url: 'mp3/BlankKyt_RSPN.ogg'},
      {url: 'mp3/BlankKytt_ThursdaySnowReprise.mp3'},
      {url: 'mp3/BlueDucks_FourFlossFiveSix.mp3'},
      {url: 'mp3/like.mp3'},
      {url: 'mp3/BlankKyt_RSPN.ogg'},
      {url: 'mp3/BlankKytt_ThursdaySnowReprise.mp3'},
      {url: 'mp3/BlueDucks_FourFlossFiveSix.mp3'},
    ]
  }
}

export function toggleSongList() {
  return {
    type: "TOGGLE_SONG_LIST",
    payload: ''
  }
}

export function togglePlaySong() {
  return {
    type: "TOGGLE_PLAY_SONG",
    payload: ''
  }
}

export function stopSong() {
  return {
    type: "STOP_SONG",
    payload: ''
  }
}

export function togglePauseSong() {
  return {
    type: "TOGGLE_PAUSE_SONG",
    payload: ''
  }
}

export function selectSong(songIndex) {
  return {
    type: "SELECT_SONG",
    payload: songIndex
  }
}

export function playSong() {
  return {
    type: "PLAY_SONG",
    payload: ''
  }
}

export function loadingSong() {
  return {
    type: "LOADING_SONG",
    payload: ''
  }
}

export function loadingSongCompleted(duration) {
  return {
    type: "LOADING_SONG_COMPLETED",
    payload: duration
  }
}

export function stopPlayAnimation() {
  return {
    type: "STOP_PLAYING_ANIMATION",
    payload: ''
  }
}

export function stopPlaying() {
  return {
    type: "STOP_PLAYING",
    payload: ''
  }
}

export function updateCurrentSongIndex(index) {
  return {
    type: "UPDATE_SONG_INDEX",
    payload: index
  }
}

export function updateSeek(seek) {
  return {
    type: "UPDATE_SEEK",
    payload: seek
  }
}

export function updateValume(volume) {
  return {
    type: "UPDATE_VALUME",
    payload: volume
  }
}

