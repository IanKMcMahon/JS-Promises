let baseURL = "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1";

$.getJSON(baseURL).then((data) => {
  console.log(data);
});
