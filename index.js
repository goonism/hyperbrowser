var swarm = require('webrtc-swarm')
var signalhub = require('signalhub')

var hub = signalhub('louisexample', ['https://signalhub-jccqtwhdwc.now.sh'])

var sw = swarm(hub)

sw.on('peer', function (peer, id) {
  console.log('connected to a new peer:', id);
  console.log('total peers:', sw.peers.length);
})

sw.on('disconnect', function (peer, id) {
  console.log('disconnected from a peer:', id);
  console.log('total peers:', sw.peers.length);
})
