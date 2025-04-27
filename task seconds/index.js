// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   const today = new Date();
//   let even = "it's even seconds";
//   let odd = "it's odd seconds";
//   const data = {
//     title: "EJS Tags",
//     seconds: new Date().getSeconds(),
//     items: ["apple", "banana", "cherry"],
//     htmlContent: "<strong>This is some strong text</strong>",
//   };
// });

// app.listen(port, () => {
//   console.log("Server");
// });

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // ضروري لو بدك تستخدم ejs

app.get("/", (req, res) => {
  const today = new Date();
  const seconds = today.getSeconds(); // لازم يكون معرف هنا

  const even = "It's even seconds";
  const items = ["apple", "banana", "cherry"];
  const htmlContent = "<strong>This is some strong text</strong>";

  const data = {
    title: "EJS Example",
    seconds: seconds, // هون بتاخد قيمة من اللي فوق
    even: even,
    items: items,
    htmlContent: htmlContent
  };

  res.render("index", data);
});

app.listen(port, () => {
  console.log("server");
});
