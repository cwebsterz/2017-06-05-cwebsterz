const teams = [
    {id: 1, name: "Braves", league: "NL"},
    {id: 1, name: "Yankees", league: "AL"},
    {id: 1, name: "Red Sox", league: "AL"},
    {id: 1, name: "Mariners", league: "AL"},
    {id: 1, name: "Mets", league: "NL"},
    {id: 1, name: "Cubs", league: "NL"}
  ]

var byLeague = function(item) {

  return item.league === 'NL'
}

var filteredLeague = teams.filter(byLeague)

console.log(filteredLeague)
