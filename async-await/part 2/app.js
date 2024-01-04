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
