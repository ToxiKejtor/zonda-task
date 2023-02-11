<template>
  <v-col cols="12" md="6">
    <v-card>
      <v-card-text>
        <OrderbookTable :book="orderbook.bids" title="Bids" />
      </v-card-text>
    </v-card>
  </v-col>
  <v-col cols="12" md="6">
    <v-card>
      <v-card-text>
        <OrderbookTable :book="orderbook.asks" title="Asks" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import OrderbookTable from "@/components/OrderbookTable.vue";
import { useOrderbook } from "@/stores/useOrderbook";
const orderbook = useOrderbook();
await orderbook.getOrderbook();
</script>

<style scoped></style>
