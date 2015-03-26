define(['body'], function(Body) {
  var Physics = Class.extend({
    enable: function(entity) {
      entity.body = new Body(entity);
    }
  });

  return Physics;
});