define(['renderer', 'updater', 'physics'], function(Renderer, Updater, Physics) {
  var App = Class.extend({
    init: function() {
      this.hasNeverStarted = true;
      this.started = false;
    },

    setup: function(canvas) {
      this.setRenderer(new Renderer(canvas));
    },

    setRenderer: function(renderer) {
      this.renderer = renderer;
    },

    run: function() {
      this.setUpdater(new Updater(this));
      this.setPhysics(new Physics(this));

      this.started = true;
      this.tick();
      this.hasNeverStarted = false;
    },

    setUpdater: function(updater) {
      this.updater = updater;
    },

    setPhysics: function(physics) {
      this.physics = physics;
    },

    tick: function() {
      this.currentTime = new Date().getTime();

      if (this.started) {
        this.updater.update();
        this.renderer.renderFrame();
      }

      if(!this.isStopped) {
        requestAnimFrame(this.tick.bind(this));
      }
    }
  });

  return App;
});