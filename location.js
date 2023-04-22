const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync("./subjects/biology/location.json", {
    encoding: "utf8",
    flag: "r",
  })
);

function random(array) {
  const length = array.length;
  const randint = Math.round(Math.random() * (length - 1), 1);
  if (randint <= 0) {
    return array[randint + 1];
  } else {
    return array[randint];
  }
}

function checkRepeat(qarray, h1, h2) {
  if (h1 !== h2) {
    return qarray.push(h2);
  } else {
    return checkRepeat(qarray, h1, random(data.location[2]));
  }
}

function questions() {
  let questions_array = [];
  const a_0 = random(data.location[0]);
  const h_1 = random(data.location[2]);
  const z_1 = random(data.location[1]);
  const h_2 = random(data.location[2]);
  const z_2 = random(data.location[1]);
  questions_array.push(a_0);
  questions_array.push(z_1);
  questions_array.push(h_1);
  checkRepeat(questions_array, h_1, h_2);
  checkRepeat(questions_array, z_1, z_2);
  return questions_array;
}

module.exports = { location_questions: questions };
