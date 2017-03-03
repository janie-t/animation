function Tree(){
}

Tree.prototype = {

  generateRandomBirdTopLocation: function() {
    return Math.floor((Math.random() * 200) + 100);
  },
  generateRandomBirdLeftLocation: function() {
    return Math.floor(Math.random() * 300) + 200;
  }
}

//------------------------

function Bird() {
  this.diameter = (Math.random() + 1) * 3;
}
