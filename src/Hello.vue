<script setup>
const props = defineProps(["message"]);
const 
console.log(props);
defineEmits(["answer"]);
</script>
<template>
  <h1>Hello World</h1>
  <p>{{ ` ${props.message}  ?` }}</p>
  <button @click="$emit('answer')">Send</button>
</template>
