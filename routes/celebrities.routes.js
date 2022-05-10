// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const { get } = require("express/lib/response");
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res) => {
  Celebrity.find({})
    .then((CelebrityDB) =>
      res.render("celebrities/celebrities", { name: CelebrityDB })
    )
    .catch((err) => console.log(err));
});

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch((err) => res.render("celebrities/new-celebrity"));
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then((celebrities) => {
    res.render("celebrities/celebrities", { celebrities });
  });
});

module.exports = router;
