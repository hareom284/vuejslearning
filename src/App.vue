<script setup>
import { ref } from "vue";
import Hello from "./Hello.vue";
const message = ref("hello");
</script>
<template>
  <!-- <div>{{ lists }}</div>
  <div class="form-group">
    <input type="checkbox" value="hare" v-model="lists" />
    <label for="hare">Hare</label>
  </div>
  <div class="form-group">
    <input type="checkbox" value="zaw" v-model="lists" />
    <label for="hare">Hare</label>
  </div>
  <div class="form-group">
    <input type="checkbox" value="someoone" v-model="lists" />
    <label for="hare">Hare</label>
  </div>
  <div class="form-group">
    <input type="checkbox" value="yoyo" v-model="lists" />
    <label for="hare">Hare</label>
  </div> -->

  <div>
    <h1>Passing Props</h1>
    <Hello />
    <p>{{ message }}</p>
  </div>
</template>
