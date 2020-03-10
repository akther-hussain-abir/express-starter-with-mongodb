const express = require("express");
const foodModel = require("../models/Food");
const router = express.Router();
const JoiSchemas = require("../middleware/joischemas");
const formValidate = require("../middleware/formValidate");
const settings = require("../config/setings");

router.get("/", formValidate(JoiSchemas.foodLIST, 'query'), async (req, res) => {
  const { page, pageSize } = req.query;

  const options = settings.defaultPaginationOptions;

  if(page) options.page = page;
  if(pageSize) options.limit = pageSize;

  try {    
    const food = await foodModel.paginate({}, options, (err, result) => {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(500).send(err);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
    const food = await foodModel.findById(req.params.id)
    .then(doc => {
        console.log(doc)
        if(!doc) res.status(404).json({ "error" : "no data found"});
        res.status(200).send(doc);
    })
    .catch(err => next(err));
});


router.post("/", formValidate(JoiSchemas.foodPOST, 'body'), async (req, res) => {
  const food = new foodModel(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/food/:id", async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.params.id);

    if (!food) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/food/:id", async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await foodModel.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
