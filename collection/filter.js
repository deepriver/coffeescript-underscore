// Generated by CoffeeScript 1.6.3
(function() {
  var evens, list;

  console.log("filter");

  list = [1, 2, 3, 4, 5, 6];

  evens = _.filter(list, function(n) {
    return n % 2 === 0;
  });

  console.log("evens " + evens);

}).call(this);