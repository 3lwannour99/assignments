import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
const port = 3000;

const posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method")); 

app.use(express.static("public"));



app.get("/", (req, res) => {
  res.render("index.ejs", { posts }); 
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/submit", (req, res) => {
  posts.push({
    title: req.body.title,
    comment: req.body.comment,
  });
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const index = req.body.index;
  posts.splice(index, 1);
  res.redirect("/");
});

app.get("/edit/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const post = posts[index]; 

  res.render("edit.ejs", { post: post, index: index }); 
});

app.post("/edit/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { title, comment } = req.body;

 

  posts[index].title = title;
  posts[index].comment = comment;

  res.redirect("/");
});

app.listen(port, () => {
  console.log("server");
});
