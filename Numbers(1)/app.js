const baseURL = "http://numbersapi.com";
let favNumber = 8;

// 1.

$.getJSON(`${baseURL}/${favNumber}?json`).then((data) => {
  console.log(data.text);
});

// 2.

let favNumbers = [8, 16, 25, 88, 91];
$.getJSON(`${baseURL}/${favNumbers}?json`).then((data) => {
  console.log(data);
});

// 3.

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
