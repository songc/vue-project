import mathjs from 'mathjs'
function scaleing(imgWidth, imgHeight, canvasWidth, canvasHeight) {
  if (imgHeight <= canvasHeight && imgWidth <= canvasWidth) {
    return 1
  } else {
    return Math.max(imgHeight / canvasHeight, imgWidth / canvasWidth)
  }
}
function generateData(len, start, step) {
  let space = step || 1
  return Array.from({length: len}, (u, i) => (i + start) * space)
}

function getDived(f, f0) {
  var theF = mathjs.matrix(f)
  var theF0 = mathjs.matrix(f0)
  var b = mathjs.dotDivide(theF, theF0)
  return b.valueOf()
}

function getNeg(f) {
  var theF = mathjs.matrix(f)
  var negF = mathjs.map(theF, x => -x)
  return negF.valueOf()
}

function getTranspose(f) {
  var theF = mathjs.matrix(f)
  var transpose = mathjs.transpose(theF)
  return transpose.valueOf()
}

export {scaleing, generateData, getDived, getNeg, getTranspose}
