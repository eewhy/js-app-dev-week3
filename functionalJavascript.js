// function upperCaser(input) {
//       return input.toUpperCase();
//     }
//
// upperCaser('hello world');
//
//     module.exports = upperCaser

// function repeat(operation, num) {
//       function operation(){
//         return num;
//       }
//     }
//
//     // Do not remove the line below
//     module.exports = repeat

// function doubleAll(numbers) {
//       return numbers.map(function(number){
//         return number * 2;
//       })
//     }
//
//     module.exports = doubleAll

// function getShortMessages(messages) {
//     return  messages.filter(function(item){
//         return item.message.length < 50
//       }).map(function(item){
//         return item.message
//       })
//     }
//
//
//     module.exports = getShortMessages

// function checkUsersValid(goodUsers){
//   return function allUsersValid(summitedUsers){
//     return summitedUsers.every(function(submittedUser){
//       return goodUsers.some(function(goodUser){
//         return goodUser.id === submittedUser.id
//       })
//     })
//   }
// };
//
//     module.exports = checkUsersValid

// function countWords(inputWords) {
//       return inputWords.reduce(function(num, str){
//         num[str] = ++num[str] || 1
//         return num;
//       },{})
//     }
//
//     module.exports = countWords

// -----------excercise Recursion--------------------

// function reduce(arr, fn, initial) {
//
//     }
//
//     module.exports = reduce

// -----------excercise Call-------------------

//
// function duckCount() {
//       number = this.number;
//
//     }
//
//     module.exports = duckCount

// var slice = Array.prototype.slice
//
//     function logger(namespace) {
//       return function(){
//         console.log.apply()
//       }
//     }
//
//     module.exports = logger
//

// module.exports = function(namespace) {
//       return console.log.bind(console, namespace);
//     }


//-----------Implement Map with Reduce-------------------

// arryMap = [1,2,3,4,5]
// module.exports = function arrayMap(arr, fn) {
//      return arr.reduce((p, c) => {
//        p.push(fn.call(arr,))
//      }, initial)
//    }

function Spy(target, method) {
      // SOLUTION GOES HERE
    }

    module.exports = Spy
