var wrestlers_num = prompt("how many wrestlers?");

class Wrestler {
  constructor(name) {
    this.name = name;
    this.weight = Number(prompt(name + "'s weight: "));
    this.attack = Number(prompt(name + "'s attack strength: "));
    this.defense = Number(prompt(name + "'s defense: "));
  }
  get score() {
    return this.get_score();
  }
  get_score() {
    return this.weight + this.attack * 2 + this.defense * 3;
  }
}

const create_players_array = () => {

  var p_arr = [];
  for (let i = 1; i < Number(wrestlers_num) + 1; i++) {

    let player = new Wrestler("Wrestler" + i);
    p_arr.push(player);
  }
  return p_arr;
}

const players_array = create_players_array();
console.log("this is" + players_array[0].name + players_array[0].attack)

function compare(a, b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
}

players_array.sort(compare);
console.log(players_array[0].score);


//output of wrestlers in order of their score
var text = "The wrestlers based on their score: \n";
players_array.forEach((player, i) => {
  console.log(player.score)
  text += Number(i + 1) + "- " + player.name + ": " + player.score + " scores \n";
})
alert(text + "\n And the winner is " + players_array[0].name + "!");

