const animals = [
  {
    name: 'monkey',
    habitat: 'jungle'
  },
  {
    name: 'racoon',
    habitat: 'forrest'
  },
  {
    name: 'tiger',
    habitat: 'jungle'
  },
  {
    name: 'pelican',
    habitat: 'ocean'
  }
];


// const jungleAnimals = [];
//
// for (var i = 0; i < animals.length; i++) {
//   if(aniamls[i].habitat === 'jungle'){
//     jungleAnimals.push(aniaml[i]);
//   }
// };

//console.log(jungleAnimals);

const filteredJungleAnimals = animals.filter(function(animal){
  return animal.habitat === 'jungle';
});

console.log(filteredJungleAnimals);
