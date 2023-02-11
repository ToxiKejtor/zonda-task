<template>
  <v-col cols="12" md="6" v-for="i in orderbookTypes" :key="i">
    <v-card>
      <v-card-text>
        <div v-if="loading" class="table-skeleton">
          <AnimatedPlaceholder
            v-for="i in 10"
            border-radius="5px"
            height="36px"
            :key="i"
          />
        </div>
        <OrderbookTable v-else :book="orderbook[i]" :title="i" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import type { OrderbookTypes } from "@/types/OrderbookTableRow";
import { watchEffect, ref, onMounted } from "vue";
import OrderbookTable from "@/components/OrderbookTable.vue";
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
import { useOrderbook } from "@/stores/useOrderbook";
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
let loading = ref(false);
const orderbookTypes: OrderbookTypes = ["bids", "asks"];

const orderbook = useOrderbook();
const currencyPairs = useCurrencyPairs();

async function handleGetOrderbook() {
  loading.value = true;
  await orderbook.getOrderbook(currencyPairs.currentPair);
  loading.value = false;
}
watchEffect(async () => {
  await handleGetOrderbook();
});

onMounted(async () => {
  await handleGetOrderbook();
});
</script>

<style scoped>
.table-skeleton {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
</style>
