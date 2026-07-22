const products = require("./service/products");
const config1 = require("./service/config");
const database = require("./service/database");

async function main() {
  console.log("PATO");
  products.getFullName("556", "hycaro");
  products.getProductLabel("Miojo");
  console.log(config1.production);
  console.log(database.connectToDatabase);
}

main();
