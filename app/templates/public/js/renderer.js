define(function() {
  var Renderer = Class.extend({
    init: function(canvas) {
      this.canvas = canvas;

      this.context = (canvas && canvas.getContext) ? canvas.getContext("2d") : null;
    },

    renderFrame: function() {
      this.paintItBlack();
    },

    paintItBlack: function() {
      this.context.fillColor = "#000000";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  });

  return Renderer;
});