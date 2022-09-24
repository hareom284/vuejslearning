/* @composite api * */

<script setup>
import { onMounted, ref, reactive, computed } from "vue";

const data = ref(0);
const isDisable = ref(false);
//reactive testing
const state = reactive({ count: 0 });
const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});
const cssArgument = ref({
  id: "name",
  class: "container bg-danger",
});
function increase() {
  data.value++;
  state.count++;
  isDisable.value = !isDisable.value;
}

function decrease() {
  data.value--;
}
const publishBookMessage = computed(() => {
  return author.books.length > 0 ? "WOW It is out" : "Dam It is not yet";
});
const currentTime = computed(() => {
  return Date.now();
});
onMounted(() => {
  console.log("setting items", data.value);
});
</script>
<template>
  <div class="container mt-3 d-inline-block">
    <button class="btn btn-success" @click="decrease">Decrease</button>
    <p>{{ data }}</p>
    <button class="btn btn-primary" @click="increase">Increase</button>
  </div>
  <div v-bind="cssArgument">
    orem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </div>
  <h1>V if Learning</h1>
  <div class="bg-primary" v-if="isDisable">
    helloworold adfakjsdfjalsfdj jasdflk n;b
  </div>
  <h1>Reactive in VUe</h1>

  <button class="btn btn-primary" @click="increase">
    {{ state.count }}
  </button>
  <p>Has Publish Book</p>
  <p>{{ author.books.length < 0 ? "Yes,It is" : "Not Yet" }}</p>

  <p>Has Publish Book</p>
  <p>{{ publishBookMessage }}</p>

  <h1>Current Time</h1>
  <p>{{ currentTime }}</p>
</template>
