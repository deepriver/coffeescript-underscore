###
  whereサンプル
###

listOfPlays = [{title:"A", author:"AA", year:1611},
{title:"B", author:"AA", year:1611},
{title:"C", author:"CC", year:1611},
{title:"D", author:"AA", year:1601}

]

result = _.where(listOfPlays, {author:"AA", year:1611})

console.log "where"
console.log _.map result, (n) ->
  n["title"] + " :: " +  n["author"]


