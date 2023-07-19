class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards === undefined) {return undefined}
    else {
      for (let i = this.cards.length-1; i > 0; i--) {
        let randomized = Math.floor(Math.random() * i)
        let randomCards = this.cards[i]
        this.cards[i] = this.cards[randomized]
        this.cards[randomized] = randomCards
      }
      return this.cards
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    }
    else{
      return false
    }
  }
}
