<template>
  <SearchPanel />
  <MealList />
</template>

<script setup>
import { onMounted } from "vue";
import store from "../store";
import MealList from "../components/MealList.vue";
import SearchPanel from "../components/SearchPanel.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(() => {
  store.dispatch("getRandomMeal");
});
</script>
