var backgroundElement;
var backgroundElement2;
var findBackgroundElements = setInterval(function() {
  backgroundElement = document.getElementById('bg-image');
  backgroundElement2 = document.getElementById('bg-image-2');
  if (backgroundElement != null && backgroundElement2 != null) {
    clearInterval(findBackgroundElements);
  }
}, 100);
var currentBackground = 1;

var transitionBgs = function(targetOpacity, nextBackgroundElement, nextBackground) {
  var opacity = 1 - targetOpacity;
  var opacityStep = (targetOpacity - opacity) / 10;
  nextBackground = nextBackground > 8 ? 1 : nextBackground;
  var incrementOpacity = setInterval(function() {
    opacity += opacityStep;
    backgroundElement2.style.opacity = opacity;
    backgroundElement2.style.filter = "alpha(opacity=" + opacity + ")";
    if (opacity < 0 || opacity > 1) {
      clearInterval(incrementOpacity);
      nextBackgroundElement.style['background-image'] = "url('bg-" + nextBackground + ".jpg')";
    }
  }, 100);
}
setInterval(function() {
  if (backgroundElement && backgroundElement2) {
    currentBackground = currentBackground > 7 ? 1 : currentBackground + 1;

    if (currentBackground % 2 == 0) {
      transitionBgs(1, backgroundElement, currentBackground + 1);
    } else {
      transitionBgs(0, backgroundElement2, currentBackground + 1);
    }
  }
}, 5000);