<template>
  <div class="flex gap-2 flex-wrap px-[30px] mt-[20px]">
    <div
      @click="showMealsByCategory(category.strCategory)"
      v-for="category of categories"
      :key="category.strCategory"
      class="p-3 m-2 border border-gray-300 rounded hover:bg-orange-500 hover:text-white transition-colors duration-300 hover:cursor-pointer"
    >
      {{ category.strCategory }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const categories = computed(() => store.state.categories);
function showMealsByCategory(category) {
  store.dispatch("getMealsByCategory", category);
}
</script>
