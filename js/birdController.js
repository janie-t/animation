window.onload = function() {
  var tree = new Tree()
  var view = new View;
  var controller = new Controller(tree, view);
  controller.bindListeners();
}

function Controller(tree, view) {
  this.tree = tree
  this.view = view
}

Controller.prototype = {
  bindListeners: function() {
    $('.plant').click(this.view.renderTree);
    $('.showBird').click(this.tree.renderBirdImage);
  }
}
