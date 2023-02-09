<script setup lang="ts">
import OrderbookTable from "@/components/OrderbookTable.vue";
import { onMounted } from "vue";
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
import { useOrderbook } from "@/stores/useOrderbook";
const currencyPairs = useCurrencyPairs();
const orderBook = useOrderbook();

onMounted(async () => {
  await currencyPairs.getPairs();
  await orderBook.getOrderbook();
});
</script>

<template>
  <main>
    <OrderbookTable />
  </main>
</template>
