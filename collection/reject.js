// Generated by CoffeeScript 1.6.3
/*
  rejectサンプル
*/


(function() {
  var list, odds;

  console.log("reject");

  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  odds = _.reject(list, function(n) {
    return n % 2 === 0;
  });

  console.log(odds);

}).call(this);