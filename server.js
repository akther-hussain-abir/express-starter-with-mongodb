const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const Router = require("./routes/index");
const Restaurant = require("./routes/RestaurantRoutes");
const Food = require("./routes/FoodRoutes");

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect(
  "mongodb+srv://admin:112233445566@twisker-c5vqj.mongodb.net/devoret?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use('/', Router);
app.use('/restaurants', Restaurant);
app.use('/foods', Food);

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
