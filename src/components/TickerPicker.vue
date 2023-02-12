<template>
  <div class="ticker-picker">
    <v-autocomplete
      hide-details
      class="ticker-picker__select"
      label="Select"
      :items="currencyPairs.pairs"
      :model-value="currencyPairs.currentPair"
      @update:modelValue="changeCurrencyPair"
    />
  </div>
</template>

<script lang="ts" setup>
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
const currencyPairs = useCurrencyPairs();
function changeCurrencyPair(newPair: string) {
  currencyPairs.currentPair = newPair;
}
await currencyPairs.getPairs();
</script>

<style scoped lang="scss">
.ticker-picker {
}
.ticker-picker__select {
  width: 150px;
}
</style>
