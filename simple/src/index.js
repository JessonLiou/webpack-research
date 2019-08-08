var a = require.ensure(['./b'], function () {
  var a = require('./a');
  a.getName();
});
