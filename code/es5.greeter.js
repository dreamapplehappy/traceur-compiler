System.registerModule("es6.greeter.js", [], function() {
  "use strict";
  var __moduleName = "es6.greeter.js";
  var Greeter = function() {
    function Greeter(_message) {
      this.message = _message;
    }
    return ($traceurRuntime.createClass)(Greeter, {greet: function() {
        var ele = document.querySelector('#message');
        ele.innerHTML = this.message;
      }}, {});
  }();
  var greeter = new Greeter('Hello, World');
  greeter.greet();
  return {};
});
System.get("es6.greeter.js" + '');
