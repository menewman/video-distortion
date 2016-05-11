
'use strict';

(function() {
  var constraints = { audio: false, video: true };
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    var videoTracks = stream.getVideoTracks();
    console.log('Using video device: ' + videoTracks[0].label);
    document.querySelector('video').srcObject = stream;
  });
})();
