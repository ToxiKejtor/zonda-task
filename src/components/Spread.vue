<template>
  <v-banner lines="one">
    <div class="text-center">Spread: {{ orderbook.spread }}</div>
  </v-banner>
</template>

<script lang="ts" setup>
import { useOrderbook } from "@/stores/useOrderbook";
const orderbook = useOrderbook();
</script>

<style scoped></style>
