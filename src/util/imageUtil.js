function scaleing(imgWidth, imgHeight, canvasWidth, canvasHeight) {
  if (imgHeight <= canvasHeight && imgWidth <= canvasWidth) {
    return 1
  } else {
    return Math.max(imgHeight / canvasHeight, imgWidth / canvasWidth)
  }
}
export {scaleing}
