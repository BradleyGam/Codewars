//Submitted Solution
function squareDigits(num){
  let arr = String(num).split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i])**2;
  }
  return parseInt(arr.join(""));
}

//Voted best practice
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}