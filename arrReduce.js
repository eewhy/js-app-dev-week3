const family = [
  {
  name: 'mom',
  age: 45
  },
  {
  name: 'dad',
  age: 54
  },
  {
  name: 'brandon',
  age: 20
  },
  {
  name: 'chelsea',
  age: 12
  }
];

let familyNames = '';

for (var i = 0; i < family.length; i++) {
  familyNames += family[i].name + ', ';
}

console.log(familyNames);

const familyNameWithAge = family.reduce(function(familyNames, member, currentIndex, familyArray){
  if (currentIndex === familyArray.length - 1){
    return familyNames + member.name + ' is ' + member.age + '.';
  }else if (currentIndex === familyArray.length - 2){
    return familyNames + member.name + ' is ' + member.age + ', and ';
  } else{
    return familyNames + member.name + ' is ' + member.age + ',';
  }
}, '');

console.log(familyNameWithAge);
