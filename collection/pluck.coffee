###
pluckサンプル
###

console.log("pluck")

stooges = [{name : 'moe', age : 40}, {name : 'larry', age : 50}, {name : 'curly', age : 60}]

list = _.pluck stooges, 'name'

console.log list
