<template>
  <div class="flex flex-col items-center justify-center mt-[50px]">
    <div>
      <input
        v-model="keyStr"
        @change="searchMeals"
        type="text"
        class="rounded border-2 bg-white border-gray-200 focus:outline-orange-500 w-72 p-2"
        placeholder="Search for Meals"
      />
      <button
        @click="searchMeals"
        class="p-2 border-solid border-2 border-orange-500 hover:bg-orange-500 hover:cursor-pointer"
      >
        Search
      </button>
    </div>
    <div class="mt-[40px]">
      <a
        class="p-3 border-solid border-2 border-orange-500 m-2 hover:bg-orange-500 hover:cursor-pointer"
        >Search by Ingredient</a
      >
      <a
        class="p-3 border-solid border-2 border-orange-500 m-2 hover:bg-orange-500 hover:cursor-pointer"
        >Search by Category</a
      >
      <a
        class="p-3 border-solid border-2 border-orange-500 m-2 hover:bg-orange-500 hover:cursor-pointer"
        >Search by Cuisine</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../store";

const keyStr = ref("");

function searchMeals() {
  store.dispatch("searchMeals", keyStr.value);
}
</script>

<style lang="scss" scoped></style>
