const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

// Create express app instance
let app = express();

// Set the view engine tp handlebars
app.set("view engine", "hbs");

// Set static folder location
app.use(express.static("public"));

// Setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// Enable forms
app.use(
    express.urlencoded({
      extended: false
    })
  );

// Import routes
const landingRoutes = require('./routes/landing.js');
const productRoutes = require('./routes/products.js');;

async function main() {

    // Landing page routes
    app.use('/', landingRoutes);
    app.use('/products', productRoutes);
}

main();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started");
  });