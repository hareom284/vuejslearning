/* @composite api * */

<script>
export default {
  data() {
    return {
      data: 0,
      htmlText: "<h1>Hello World</h1>",
      isDisable: false,
    };
  },

  methods: {
    increase() {
      this.data++;
      this.isDisable = !this.isDisable;
    },
    decrease() {
      this.data--;
    },
  },
};
</script>
<template>
  <div class="container mt-3 d-inline-block">
    <button class="btn btn-success" @click="decrease">Decrease</button>
    <p>{{ data }}</p>
    <div v-html="htmlText"></div>
    <button class="btn btn-primary" @click="increase">Increase</button>
    <div class="row">
      <div class="col-2">
        <h1>Disable Button</h1>
        <button :disabled="isDisable" class="btn btn-danger">Click</button>
      </div>
    </div>
  </div>
</template>
