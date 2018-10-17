const teacher = {
  name: 'Shannon',
  age: 33,
  greet: function(){
    setTimeout(function(){
      console.log('Hello!!! my name is ' + this.name + '.');
    }.bind(this), 2000);
  }
}

const dog = {
  name: 'Bobby',
  age: 6,
  sayAge: function() {
    console.log("I'm " + this.age + " years old");
  }
}

teacher.greet.call(dog);
//dog.sayAge.apply(teacher);

const utils = {
  ageInTenYears: function(){
    console.log('I will be ' + (this.age + 10) + ' years old in 10 years.');
  }
}

utils.ageInTenYears.call(teacher);
