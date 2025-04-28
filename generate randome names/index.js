import express from "express";
// import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

const name1 = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Kenny",
  "Lily",
  "Mason",
  "Nina",
  "Oliver",
];

const name2 = [
  "Paul",
  "Quinn",
  "Riley",
  "Sophia",
  "Tom",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zane",
  "Amelia",
  "Brandon",
  "Catherine",
  "Daniel",
  "Ella",
];


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomeName = name1[Math.floor(Math.random() * name1.length)];
  const randomeName2 = name2[Math.floor(Math.random() * name2.length)];

  res.render("index.ejs", {
    randomeName: randomeName,
    randomeName2: randomeName2,
  });
});

app.get("/footer", (req, res) => {
  res.render("footer.ejs");
});

// app.get("/contact", (req, res) => {
//   res.render("contact.ejs");
// });

app.listen(port, () => {
  console.log("server");
});
