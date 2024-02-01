<template>
  <div
    class="flex gap-10 flex-wrap px-[30px] mt-[80px] items-center justify-center"
  >
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";
import MealItem from "./MealItem.vue";

const meals = computed(() => store.state.searchedMeals);
</script>
