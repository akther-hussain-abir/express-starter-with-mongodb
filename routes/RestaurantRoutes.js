const express = require("express");
const Restaurant = require("../models/Restaurant");
const router = express.Router();

router.get("/", async (req, res, err) => {
  const restaurant = await Restaurant.find({});

  try {
    res.send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  const restaurant = await Restaurant.findOne({ "_id": req.params.id })
    .then(doc => {
        console.log(doc);
     if (!doc) res.status(404).send("No data found");
      res.status(200).json(doc);
    })
    .catch(err => next(err));
});

router.get("/filter/:slug", async (req, res, err) => {
  await Restaurant.aggregate([ { $match: { 'social_media.media_name': req.params.slug } } ])
  .then(doc => {
    res.json(doc)
  })
});

module.exports = router;
