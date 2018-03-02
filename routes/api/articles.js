const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const axios = require("axios");

// Matches with "/api/article"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

// NYTimes API
router
  .route("/api/articles").post((req, res) => {
    let { topic, startYear, endYear } = req.body;
    startYear = startYear.replace(/-/g, "");
    endYear = endYear.replace(/-/g, "");
    const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const url =
      baseURL +
      `?api-key=${
        process.env.NYT_KEY
      }&q=${topic}&begin_date=${startYear}&end_date=${endYear}`;
    axios
      .get(url)
      .then(data => {
        res.json(data.data.response.docs);
      })
      .catch(err => {
        res.json(err);
      });
  });
module.exports = router;