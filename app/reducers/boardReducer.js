export default function reducer(state={
    width: 600,
    songs: [],
    similarAlbums: []
  }, action) {
  switch (action.type) {
    case "RESIZE_WINDOW": {
      return {...state, width: action.payload}
    }
    case "FETCH_SONGS": {
      return {...state, songs: action.payload}
    }
    case "FETCH_SIMILAR_ALBUMS": {
      return {...state, similarAlbums: action.payload}
    }
  }
  return state
}