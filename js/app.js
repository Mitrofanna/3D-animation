//3d scroll

let zSpacing = 1000;
lastPost = zSpacing / 5;
$frames = document.getElementsByClassName('frame');
frames = Array.from($frames);
zValues = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  delta = lastPost - top;
  lastPost = top;

  frames.forEach(function (n, i) {
    zValues.push((i * zSpacing) + zSpacing)
    zValues[i] += delta * -5.5
    let frame = frames[i],
    transform = `translateZ(${zValues[i]}px)`
    opacity = zValues[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  })
}

window.scrollTo(0, 1)