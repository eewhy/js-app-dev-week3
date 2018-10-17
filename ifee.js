//immediately invoked function

function greet(name){
  console.log('hello, ' + name)
};


(function(name){
  console.log('Hello ' + name + '. I\'m immediatly invoked')
})('Kevin');
