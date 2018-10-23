const slideShow = {
      photoList: ['one', 'two', 'three', 'four', 'five'],
      currentPhotoIndex: 0,
      nextPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length-1) {
          this.currentPhotoIndex += 0;
          console.log(this.photoList[this.currentPhotoIndex]);
        } else {
          console.log('End of slideshow')
          this.pause();
        }
      },
      prevPhoto: function() {
          if (this.currentPhotoIndex !== 0) {
            this.currentPhotoIndex -= 1;
            console.log(this.photoList[this.currentPhotoIndex]);
          } else {
            console.log('Beginning of slideshow');
          }
      },
      getCurrentPhoto: function(){
          return this.photoList[this.currentPhotoIndex];
      },

      playInterval: null,

      play: function(){
        this.playInterval = setInterval(function(){
          this.nextPhoto();
        }.bind(this), 2000)
      },

      pause: function(){
            clearInterval(this.playInterval);
      }
};

slideShow.play();
