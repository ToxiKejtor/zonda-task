<script setup lang="ts">
import OrderbookTable from "@/components/OrderbookTable.vue";
import { onMounted } from "vue";
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
import { useOrderbook } from "@/stores/useOrderbook";
const currencyPairs = useCurrencyPairs();
const orderbook = useOrderbook();

onMounted(async () => {
  await currencyPairs.getPairs();
  await orderbook.getOrderbook();
});
</script>

<template>
  <main>
    <OrderbookTable :book="orderbook.bids" />
    <OrderbookTable :book="orderbook.asks" />
  </main>
</template>
