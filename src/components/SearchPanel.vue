<template>
  <div class="text-2xl font-bold ml-5 text-orange-500 mt-5">Quick search by cuisine:</div>
  <CuisineList />
  <div class="text-2xl font-bold ml-5 text-orange-500 mt-2">Quick search by category:</div>
  <CategoryList />

  <div class="flex flex-col ml-[40px] mt-[50px]">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../store";
import CategoryList from "./CategoryList.vue";
import CuisineList from "./CuisineList.vue";

const keyStr = ref("");

function searchMeals() {
  store.dispatch("searchMeals", keyStr.value);
}
</script>

<style lang="scss" scoped></style>
