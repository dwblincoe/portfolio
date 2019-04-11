const routes = require("next-routes")();

routes
  .add("index", "/", "/modules/home")
  .add("about", "/about", "/modules/about")
  .add("experience", "/experience", "/modules/experience")
  .add("portfolio", "/portfolio", "/modules/portfolio")
  .add("contact", "/contact", "/modules/contact");

module.exports = routes;
