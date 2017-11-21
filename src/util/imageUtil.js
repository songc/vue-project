function scaleing(imgWidth, imgHeight, canvasWidth, canvasHeight) {
  if (imgHeight <= canvasHeight && imgWidth <= canvasWidth) {
    return 1
  } else {
    return Math.max(imgHeight / canvasHeight, imgWidth / canvasWidth)
  }
}
function getX(len, start) {
  var result = new Array(len)
  for (let i = 0; i < len; i++) {
    result[i] = i + start
  }
  return result
}
export {scaleing, getX}
