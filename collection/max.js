// Generated by CoffeeScript 1.6.3
/*
maxサンプル
*/


(function() {
  var numbers, res1, result, stooges;

  console.log("max");

  numbers = [10, 5, 100, 2, 1000];

  res1 = _.max(numbers);

  console.log(res1);

  stooges = [
    {
      name: 'moe',
      age: 40
    }, {
      name: 'larry',
      age: 50
    }, {
      name: 'curly',
      age: 60
    }
  ];

  result = _.max(stooges, function(n) {
    return n.age;
  });

  console.log(result);

}).call(this);
