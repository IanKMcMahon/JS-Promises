////////////////////////////////////////////////////////////

let baseURL = "http://numbersapi.com";
let faveNum = 8;

// // 1.

async function NumFact() {
  res = await axios.get(`${baseURL}/${faveNum}`);
  console.log(res.data);
}

NumFact();

// 2.

async function getThreeNumFacts() {
  nums = [16, 58, 99];
  let f1Prom = axios.get(`${baseURL}/${nums[0]}`);
  let f2Prom = axios.get(`${baseURL}/${nums[1]}`);
  let f3Prom = axios.get(`${baseURL}/${nums[2]}`);

  let f1 = await f1Prom;
  let f2 = await f2Prom;
  let f3 = await f3Prom;

  console.log(f1.data);
  console.log(f2.data);
  console.log(f3.data);
}

getThreeNumFacts();

// 3.

async function fourFactsaboutNum() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${faveNum}?json`);
    })
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}<p>`);
  });
}

fourFactsaboutNum();
