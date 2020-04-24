const express = require("express");
const _ = require("lodash");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

let lotto = [];

app.get("/", (req, res) => {
  res.json({});
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running!");
});

app.get("/lotto", (req, res) => {
  res.send(_.sortBy(_.sampleSize(_.range(1, 46), 6)));
});

/* app.get("/lotto", (req, res) => {
  let i = 0;
  while (i < 6) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!sameNum(n)) {
      lotto.push(n);
      i++;
    }
  }

  res.json({ result: lotto });
}); */

/* function sameNum(n) {
  for (var i = 0; i < lotto.length; i++) {
    if (n === lotto[i]) {
      return true;
    }
  }
  return false;
} */
