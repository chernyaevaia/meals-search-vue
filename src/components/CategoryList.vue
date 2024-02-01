<template>
  <div class="flex gap-5 flex-wrap px-[30px] mt-[80px] justify-center">
    <div v-for="category of categories">{{ category.strCategory }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const categories = computed(() => store.state.categories);
</script>
