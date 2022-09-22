Vue.createApp({
  data() {
    return {
      newValue: "",
      goals: [],
    };
  },

  methods: {
    getGoals() {
      this.goals.push(this.newValue);
      this.newValue = "";
    },
  },
}).mount("#app");
