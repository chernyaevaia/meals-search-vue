<template>
  <div class="flex gap-5 flex-wrap px-[30px] mt-[80px] justify-center">
    <div v-for="cuisine of cuisines">{{ cuisine.strArea }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const cuisines = computed(() => store.state.cuisines);
</script>
