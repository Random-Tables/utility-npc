const index = require("./index.json");
const personality = require("./personality.json");
const hobby = require("./hobby.json");
const physical = require("./physical.json");
const motivation = require("./motivation.json");
const family = require("./family.json");

module.exports = {
  ...index,
  tableData: {
    personality,
    hobby,
    physical,
    motivation,
    family,
  },
};
