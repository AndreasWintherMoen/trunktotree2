import data from "../../data/kontoutskrift.json";

const moneySpentPerCategory = {};

data.forEach((t) => {
  if (t["Category"] in moneySpentPerCategory) {
    moneySpentPerCategory[t["Category"]] += t["Amount"];
  } else {
    moneySpentPerCategory[t["Category"]] = t["Amount"];
  }
});

export default moneySpentPerCategory;
