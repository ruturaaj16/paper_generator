const pdf = require("html-pdf");

const createPdf = (html, toModify) => {
  const rnd = Math.floor(Math.random() * 1045678900);
  let modifiedHtml;
  let ntfqshtml = "";
  toModify.name_the_following.forEach((q) => {
    ntfqshtml += `<li>${q}</li>`;
  });
  let lqshtml = "";
  toModify.location.forEach((q) => {
    lqshtml += `<li>${q}</li>`;
  });
  modifiedHtml = html.replace("{{name_the_following}}", ntfqshtml);
  modifiedHtml = modifiedHtml.replace("{{location}}", lqshtml);

  pdf
    .create(modifiedHtml, {
      format: "A4",
      border: "28mm",
    })
    .toFile(`./randompaper${rnd}.pdf`, function (err, res) {
      if (err) return console.log(err);
      else return console.log(res);
    });
};

module.exports = createPdf;
