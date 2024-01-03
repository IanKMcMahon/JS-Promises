let baseURL = "https://deckofcardsapi.com/api/deck/new/";

// 1.

async function drawCard() {
  res = await axios.get(`${baseURL}/draw?json`);
  card = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`;
  console.log(card);
}

drawCard();
