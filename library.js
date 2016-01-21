(function(module) {
  'use strict';

  const fields = ['fullname'];

  var Plugin = {};

  Plugin.addFields = function(object, callback) {
    object.fields.push.apply(object.fields, fields);
    callback(null, object);
  };

  module.exports = Plugin;
}(module));