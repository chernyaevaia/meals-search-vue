<template>
  <div class="flex gap-5 flex-wrap px-[30px] mt-[80px] justify-center">
    <div v-for="ingredient of ingredients">{{ ingredient.strIngredient }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const ingredients = computed(() => store.state.ingredients);
</script>
