let baseURL = "https://deckofcardsapi.com/api/deck";

// 1.

async function drawCard() {
  res = await axios.get(`${baseURL}/new/draw?json`);
  card = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`;
  console.log(card);
}

drawCard();

// 2.

async function drawTwoCards() {
  let firstCardData = await axios.get(`${baseURL}/new/draw?json`);
  console.log(firstCardData);
  let deckId = firstCardData.data.deck_id;
  console.log(deckId);
  let secondCardData = await axios.get(`${baseURL}/${deckId}/draw?json`);
  console.log(secondCardData);
  [firstCardData, secondCardData].forEach((card) => {
    let { suit, value } = card.data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });
}

drawTwoCards();


// 3.

let deckId = null;
let $btn = $("button");
let $cardArea = $("#card-area");

$.getJSON(`${baseURL}/new/shuffle/`).then((data) => {
  deckId = data.deck_id;
  $btn.show();
});

$btn.on("click", function () {
  $.getJSON(`${baseURL}/${deckId}/draw/`).then((data) => {
    let cardSrc = data.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardArea.append(
      $("<img>", {
        src: cardSrc,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
        },
      })
    );
    if (data.remaining === 0) $btn.remove();
  });
});
});

