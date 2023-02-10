<script setup lang="ts">
import OrderbookTable from "@/components/OrderbookTable.vue";
import TickerPicker from "@/components/TickerPicker.vue";
import { onMounted } from "vue";
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
import { useOrderbook } from "@/stores/useOrderbook";
const currencyPairs = useCurrencyPairs();
const orderbook = useOrderbook();

onMounted(async () => {
  await currencyPairs.getPairs();
  await orderbook.getOrderbook(currencyPairs.currentPair);
});
</script>

<template>
  <main>
    <TickerPicker />
    <OrderbookTable :book="orderbook.bids" title="Bids" />
    <OrderbookTable :book="orderbook.asks" title="Asks" />
  </main>
</template>
