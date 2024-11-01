<template>
  <div
    @click="getMealDetails(meal.idMeal)"
    class="bg-white shadow rounded-xl hover:scale-105 transition-all w-[200px]"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import store from "../store";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
