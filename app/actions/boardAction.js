export function resizeWindow(windowWidth) {
  return {
    type: "RESIZE_WINDOW",
    payload: windowWidth
  }
}

export function fetchSimilarAlbums(albumsId) {
  return {
    type: "FETCH_SIMILAR_ALBUMS",
    payload: [
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
    ]
  }
}