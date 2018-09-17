const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.nytreact
            .find(req.query)
            .sort({ date: -1 })
            .catch(err => res.status(422).json(err));

    }
}