<template>
  <div class="flex gap-2 flex-wrap px-[30px] mt-[20px] mb-5">
    <div
      @click="showMealsByCuisine(cuisine.strArea)"
      v-for="cuisine of cuisines"
      :key="cuisine.strArea"
      class="p-3 m-2 border border-gray-300 rounded hover:bg-orange-500 hover:text-white transition-colors duration-300 hover:cursor-pointer"
    >
      {{ cuisine.strArea }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const cuisines = computed(() => store.state.cuisines);
function showMealsByCuisine(cuisine) {
  store.dispatch("getMealsByCuisine", cuisine);
}
</script>
