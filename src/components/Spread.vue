<template>
  <v-banner lines="one">
    <AnimatedPlaceholder v-if="loading" height="20px" />
    <div v-else class="text-center">Spread: {{ spread }}</div>
  </v-banner>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useOrderbook } from "@/stores/useOrderbook";
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
import { storeToRefs } from "pinia";
const orderbook = useOrderbook();
const currencyPairs = useCurrencyPairs();
let loading = ref(true);
const { currentPair } = storeToRefs(currencyPairs);
const { spread } = storeToRefs(orderbook);
watch(currentPair, () => {
  loading.value = true;
});

watch(spread, () => {
  loading.value = false;
});
</script>

<style scoped></style>
