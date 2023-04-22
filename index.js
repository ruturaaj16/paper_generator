const { name_the_following_questions } = require("./name_the_following");
const { location_questions } = require("./location");
const createPdf = require("./htmltopdf");
const fs = require("fs");

const html = fs.readFileSync("./index.html", "utf8");

const ntfqs = name_the_following_questions();
const lqs = location_questions();

createPdf(html, { name_the_following: ntfqs, location: lqs });
