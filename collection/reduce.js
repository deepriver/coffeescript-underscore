// Generated by CoffeeScript 1.6.3
/*
  reduceサンプル
*/


(function() {
  var list1, result;

  console.log("reduce");

  list1 = [1, 2, 3];

  result = _.reduce(list1, function(memo, n) {
    return n + memo;
  }, 11);

  console.log(result);

}).call(this);
