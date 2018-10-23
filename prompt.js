const userProfile = {
  name: 'EY',
  address: '123 Hayden rd',
  city: 'Dublin',
  state: 'OH',
  zipcode: '43016',
  avatar: ''
}

function performUpdate(object, key, value) {
  var userProfile = {}
  userProfile[key] = value;
  return Object.assign(object, userProfile );
}

const prompt = require('prompt');

function updateProfile(userProfile) {
  prompt.start();

  prompt.get(['thefieldtoUpdate', 'valuefortheUpdate'], function(err, answers){
    console.log(answers);

  var updatedProfile = performUpdate(userProfile, answers.thefieldtoUpdate, answers.valuefortheUpdate);

  console.log(updatedProfile);

  })

}

updateProfile(userProfile);
