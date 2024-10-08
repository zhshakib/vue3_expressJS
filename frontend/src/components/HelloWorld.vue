<script setup>
import { ref } from 'vue'
import axios from 'axios'

const message = ref({});

axios.get('/').then((response) => {
  message.value = response.data
}).catch((error) => {
  console.log(error);
})

</script>

<template>
  <h1>Message: {{ message.message }}</h1>
  <h2>Name: {{ message.name }}</h2>
  <h2>Age: {{ message.age }}</h2>
</template>
