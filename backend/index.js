const express = require("express");

const app = express();

app.use(express.json());

app.listen(666, () => console.log("Gatinho pspspsps"));

//app.get("/", (req, res) => {res.send("miau") });
// app.get("/golira", (req, res) => {res.send("é gorila burro kkkk") });
// app.get("/cachorro", (req, res) => {res.send("au au") });
// app.get("/fim", (req, res) => {res.end() }) const dados = [];
// app.get("/j", (req, res) => {res.json({ dados }) });

const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "testepessoa",
  user: "root",
  password: "",
});

const getAllPessoas = async () => {
  const [query] = await connection.execute("select * from pessoa");
  return query;
};

app.get("/pessoa", async (req, res) => {
  const resultado = await getAllPessoas();
  return res.status(200).json(resultado);
});
