const { readdirSync } = require("fs");
const { join } = require("path");

module.exports = [
  join(__dirname, "arrays"),
  join(__dirname, "linked-lists"),
  join(__dirname, "stacks-and-queues"),
  join(__dirname, "trees-and-graphs"),
].map(dir => readdirSync(dir).map(f => join(dir, f)))
  .reduce((files, cur) => [...files, ...cur], [])
  .reduce((module, file) => ({...module, ...require(file)}), {});
