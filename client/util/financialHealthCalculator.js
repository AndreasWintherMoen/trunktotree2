import data from "../../data/kontoutskrift.json";

const moneyUsedPerMonth = {
  January: 0,
  February: 0,
  March: 0,
  April: 0,
  May: 0,
  June: 0,
  July: 0,
  August: 0,
  September: 0,
  October: 0,
  November: 0,
  December: 0,
  AllTogether: 0,
};

data.forEach((t) => {
  moneyUsedPerMonth[
    new Date(t["Date"]).toLocaleString("default", { month: "long" })
  ] += t["Amount"];

  moneyUsedPerMonth["AllTogether"] += t["Amount"];
});

export default moneyUsedPerMonth;
