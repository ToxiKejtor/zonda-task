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
  <v-main>
    <v-container>
      <v-row justify="start">
        <v-col cols="12">
          <TickerPicker />
        </v-col>
      </v-row>
      <v-row>
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
      </v-row>
    </v-container>
  </v-main>
</template>
