'use strict'

var sudo = require('sudo-js');
sudo.setPassword('vasquez123');

class PlantyController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onRiego(data){
    console.log(data)
    this.socket.emit('riegos','hesll')
  }
  
}

module.exports = PlantyController
