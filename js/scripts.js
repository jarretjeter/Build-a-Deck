$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();
  let cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  let suits = ["of clubs", "of spades", "of diamonds", "of hearts"];
  let deck = [];
  console.log(cards);
  console.log(suits);
  console.log(deck);

  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      deck.push(" " + card + " " + suit);
    });
  });

  $("#output").text(deck.toString().toUpperCase());
  console.log(deck);

  //   suits.forEach(function(suit) {
  //   cards.forEach(function(card) {
  //     $("<li></li>").append(deck.push(card + " " + suit));
  //   });
  // });

  // // $("#output").text(deck);
  // $("<li></li>").text(deck);
  });
});