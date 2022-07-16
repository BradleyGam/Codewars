//Submitted Solution
function warnTheSheep(queue) {
  let wolfPos;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      wolfPos = i;
    }
  }
  if (wolfPos == queue.length - 1) {
    return "Pls go away and stop eating my sheep"
  }
  return `Oi! Sheep number ${queue.length - wolfPos - 1}! You are about to be eaten by a wolf!`
}

//Voted best practice
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}