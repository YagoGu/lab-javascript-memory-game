const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener('load', () => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      card.className = "card turned";
      console.log(`Card clicked: ${card}`);
      
      memoryGame.pickedCards.push(card)
      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name")) === true) {
          memoryGame.pickedCards[0].className = "card turned blocked"
          memoryGame.pickedCards[1].className = "card turned blocked"
          memoryGame.pickedCards = [];
        }
        else {
          setTimeout(() => {
            memoryGame.pickedCards[0].className = "card"
            memoryGame.pickedCards[1].className = "card"
            memoryGame.pickedCards = [];
          }, 1000);
        }
      }
      else if (memoryGame.pickedCards.length > 2) {
          memoryGame.pickedCards.forEach(element => {
            element.className="card"
          });
          memoryGame.pickedCards = [];
      }
      
      document.getElementById("pairs-clicked").innerHTML = memoryGame.pairsClicked
      document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed
      if (memoryGame.checkIfFinished() === true) {
        document.querySelector('#memory-board').innerHTML = `
          <h1>GAME OVER</h1>
          <h2>Pairs clicked: ${memoryGame.pairsClicked}</h2>
          <h2>Pairs guessed: ${memoryGame.pairsGuessed}</h2>
        `
      }
    });
  });
});
