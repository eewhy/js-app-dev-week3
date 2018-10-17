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

const familyIntweleveYears = [];

for (var i = 0; i < family.length; i++) {
  familyIntweleveYears.push({
    name: family[i].name,
    age: family[i].age + 12,
  })
};

console.log(familyIntweleveYears);

const mappedFamilyInFiveYears = family.map(function(member){
  return {
    name: member.name,
    age: member.age + 5,
  }
});

console.log(mappedFamilyInFiveYears);
