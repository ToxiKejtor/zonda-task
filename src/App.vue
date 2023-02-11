<script setup lang="ts">
import { RouterView } from "vue-router";
const theme = "light";
</script>

<template>
  <v-app :theme="theme">
    <RouterView />
  </v-app>
</template>

<style scoped></style>
