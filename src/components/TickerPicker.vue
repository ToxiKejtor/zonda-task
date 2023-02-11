<template>
  <div class="ticker-picker">
    <v-autocomplete
      loading
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
import { useOrderbook } from "@/stores/useOrderbook";
const currencyPairs = useCurrencyPairs();
const orderbook = useOrderbook();
function changeCurrencyPair(newPair: string) {
  currencyPairs.currentPair = newPair;
  orderbook.getOrderbook(newPair);
}
</script>

<style scoped lang="scss">
.ticker-picker {
}
.ticker-picker__select {
  width: 150px;
}
</style>
