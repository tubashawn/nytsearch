const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
    .get(articlesController.findAll)
    .create(articlesController.create);

router.route("./:id")
    .get(articlesController.findById);

module.exports = router;