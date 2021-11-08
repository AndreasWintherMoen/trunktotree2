import { createStore } from "vuex";

export const store = createStore({
  state: {
    monthSelected: new Date().toLocaleString("default", { month: "long" }),
  },
  mutations: {
    setMonth(state, month) {
      state.monthSelected = month;
    },
  },
});
