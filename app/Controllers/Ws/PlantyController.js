'use strict'

class PlantyController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onRiego(data){
    console.log(data)
    this.socket.emit('riego',{response:'Success'})
  }
}

module.exports = PlantyController
