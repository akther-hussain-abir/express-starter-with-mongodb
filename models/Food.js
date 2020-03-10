const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    }
  }
});

FoodSchema.plugin(mongoosePaginate);

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
