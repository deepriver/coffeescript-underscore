// Generated by CoffeeScript 1.6.3
/*
someサンプル
*/


(function() {
  console.log("some");

  console.log(_.some([1, 2, 3], function(n) {
    return n % 2 === 0;
  }));

  console.log(_.some([1, 3, 5], function(n) {
    return n % 2 === 0;
  }));

}).call(this);