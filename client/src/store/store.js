import { createStore } from "vuex";
import generateSpendingBars from "../../util/generateSpendingBars";

export const store = createStore({
  state: {
    monthSelected: new Date().toLocaleString("default", { month: "long" }),
    spendingBars: generateSpendingBars(),
  },
  mutations: {
    setMonth(state, month) {
      state.monthSelected = month;
    },
  },
});
