const superHeroes = [
  ['Batman', 'Bruce Wayne'],
  ['Spider Man', 'Peter Parker'],
  ['The Flash', 'Barry Allen']
]

const secretIdentity = superHeroes.map(function(revealArray, heroes) {
  return revealArray.join('is');
});

console.log(secretIdentity.join('\n'));
