const app = Vue.createApp({
  data() {
    return {
      name: "Zaw Zaw Win",
      age: "22",
      img_url: "https://picsum.photos/200",
    };
  },
  methods: {
    getRandom() {
      return Math.random().toFixed(2) * 100;
    },
  },
});

app.mount("#assignment");
