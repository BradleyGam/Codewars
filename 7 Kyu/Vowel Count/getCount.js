//Submitted Solution and voted best practice.
function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}