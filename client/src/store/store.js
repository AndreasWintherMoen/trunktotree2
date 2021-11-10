import { createStore } from "vuex";
import generateSpendingBars from "../../util/generateSpendingBars";

export const store = createStore({
  state: {
    monthSelected: (new Date().toLocaleString("default", { month: "long" })).charAt(0).toUpperCase() + (new Date().toLocaleString("default", { month: "long" })).slice(1),
    spendingBars: generateSpendingBars(),
  },
  mutations: {
    setMonth(state, month) {
      state.monthSelected = month.charAt(0).toUpperCase() + month.slice(1);
    },
  },
});
