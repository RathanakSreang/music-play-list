import React from 'react';
import io from 'socket.io-client';

class APP extends React.Component {

  componentWillMount() {
    this.socket = io('http://localhost:3330');
    this.socket.on('connect', this.connect);
  }

  connect() {
    console.log(this.id);
    // alert("Connected: " + this.socket);
  }

  render() {
    return (<h1> Hello from react </h1>);
  }
}

export default APP;