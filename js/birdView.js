function View() {
}

View.prototype = {
  renderTree: function() {
    $('.tree-image').show()
  },
  renderBirdImage: function(top, left) {
    // $('.orange-image:first').clone().appendTo('.orange-container').css
    $('.bird-image:first').clone().appendTo('.bird-container').css("bottom", top, "left", left).show()
    console.log(top);
    console.log(left)
  }
}
