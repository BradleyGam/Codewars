//Submitted Solution
function invert(array) {
  let arr = []; 
  for (let i = 0; i < array.length; i++) {
    arr[i] = array[i] * -1;
  }
  return arr;
}

//Voted Best Practice
function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}