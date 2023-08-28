const express = require("express");

const app = express();

app.listen(666, () => console.log("Gatinho pspspsps"));

app.get("/", (req, res) => {
  res.send("miau");
});
app.get("/golira", (req, res) => {
  res.send("é gorila burro kkkk");
});
app.get("/cachorro", (req, res) => {
  res.send("au au");
});
app.get("/fim", (req, res) => {
  res.end();
});
const dados = [];
app.get("/j", (req, res) => {
  res.json({ dados });
});
