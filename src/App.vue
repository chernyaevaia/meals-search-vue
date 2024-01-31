<template>
  <header>
    <router-link :to="{ name: 'byIngredient' }"
      >Search by Ingredients</router-link
    >
  </header>
  <main><router-view /></main>
</template>

<script setup></script>
