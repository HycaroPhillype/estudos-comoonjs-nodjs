const { getFullName, getProductLabel } = require("./service/products");
const config1 = require("./service/config");
const database = require("./service/database");

async function main() {
  console.log("PATO");
  getFullName("556", "hycaro");
  getProductLabel("Miojo");
  console.log(config1.production);
  console.log(database.connectToDatabase);
}

main();
