
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let outputarr = [];
if (arguments.length == 0 || matrix == []) {
  return [];
} else 
{
    for (let i = 0; i < matrix.length; i++){
    if (i % 2 == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        outputarr.push(matrix[i][j])
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        outputarr.push(matrix[i][j])
      }
    }
  }}

  return outputarr;
}
