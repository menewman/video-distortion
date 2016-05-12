(function() {
  'use strict';

  var videos = [].slice.call(document.querySelectorAll('video'));

  var constraints = { audio: false, video: true };
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    var videoTracks = stream.getVideoTracks();
    console.log('Using video device: ' + videoTracks[0].label);

    videos.forEach(function(video) { video.srcObject = stream; });
  });

  function hasCssClass(element, cssClass) {
    return element.className.split(' ').indexOf(cssClass) > -1;
  }

  function toggleCssClass(element, cssClass) {
    if (hasCssClass(element, cssClass)) {
      element.className = element.className.split(' ').filter(function(name) {
        return name !== cssClass;
      });
    }
    else {
      element.className += ' ' + cssClass;
    }
  }

  function toggle() {
    toggleCssClass(this, 'suppress-filter');
  }

  videos.forEach(function(video) { video.onclick = toggle; });

  document.querySelector('#heading').onclick = function() {
    videos.forEach(function(video) { video.onclick() });
  }
})();
