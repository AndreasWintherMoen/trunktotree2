import data from "../../data/kontoutskrift.json";

const ACCOUNT_ID = 100000;

export const MONTHS = {
  January: "January",
  February: "February",
  March: "March",
  April: "April",
  May: "May",
  June: "June",
  July: "July",
  August: "August",
  September: "September",
  October: "October",
  November: "November",
  December: "December",
  YEAR: "YEAR",
};

const MonthIndex = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
  YEAR: -1,
};

export const CATEGORIES = {
  DiningOut: "DiningOut",
  Savings: "Savings",
  Groceries: "Groceries",
  Loans: "Loans",
  Shopping: "Shopping",
  Insurance: "Insurance",
  Home: "Home",
  Salary: "Salary",
  Utilities: "Utilities",
  Subscriptions: "Subscriptions",
  Travel: "Travel",
  Other: "Other",
  ALL_CATEGORIES: "ALL_CATEGORIES",
};

const formattedData = data
  .filter((d) => d.AccountID === ACCOUNT_ID)
  .map((d) => {
    return {
      ...d,
      Date: new Date(d["Date"]),
    };
  });

const monthIs = (month) => (d) => d.Date.getMonth() === MonthIndex[month];
const categoryIs = (category) => (d) => d.Category === category;
const categoryIsNot = (category) => (d) => d.Category !== category;

export const dataPerMonth = {
  January: formattedData.filter(monthIs(MONTHS.January)),
  February: formattedData.filter(monthIs(MONTHS.February)),
  March: formattedData.filter(monthIs(MONTHS.March)),
  April: formattedData.filter(monthIs(MONTHS.April)),
  May: formattedData.filter(monthIs(MONTHS.May)),
  June: formattedData.filter(monthIs(MONTHS.July)),
  July: formattedData.filter(monthIs(MONTHS.July)),
  August: formattedData.filter(monthIs(MONTHS.August)),
  September: formattedData.filter(monthIs(MONTHS.September)),
  October: formattedData.filter(monthIs(MONTHS.October)),
  November: formattedData.filter(monthIs(MONTHS.November)),
  December: formattedData.filter(monthIs(MONTHS.December)),
  YEAR: formattedData,
};

const getMoneySpent = (month, category) => {
  if (category === CATEGORIES.ALL_CATEGORIES)
    return Math.abs(
      dataPerMonth[month]
        .filter(categoryIsNot(CATEGORIES.Salary))
        .reduce((a, b) => a + b.Amount, 0)
    );
  return Math.abs(
    dataPerMonth[month]
      .filter(categoryIs(category))
      .reduce((a, b) => a + b.Amount, 0)
  );
};

export default getMoneySpent;

// ***********
// OLD VERSION
// ***********
//
// console.log(
//   `Money spent: ${getMoneySpent(MONTHS.January, CATEGORIES.ALL_CATEGORIES)}`
// );

//data.forEach((t) => {
//  moneyUsedPerMonth[
//    new Date(t["Date"]).toLocaleString("default", { month: "long" })
//  ] += t["Amount"];
//
//  moneyUsedPerMonth["AllTogether"] += t["Amount"];
//});

// export default moneyUsedPerMonth;

// const moneySpentPerCategory = {};

//data.forEach((t) => {
//  if (t["Category"] in moneySpentPerCategory) {
//    moneySpentPerCategory[t["Category"]] += t["Amount"];
//  } else {
//    moneySpentPerCategory[t["Category"]] = t["Amount"];
//  }
//});
//
//export default moneySpentPerCategory;
