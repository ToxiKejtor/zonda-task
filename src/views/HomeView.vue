<script setup lang="ts">
import OrderbookTables from "@/components/OrderbookTables.vue";
import SkeletonTables from "@/components/SkeletonTables.vue";
import TickerPicker from "@/components/TickerPicker.vue";
import { onMounted } from "vue";
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
const currencyPairs = useCurrencyPairs();

onMounted(async () => {
  await currencyPairs.getPairs();
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
        <Suspense>
          <template #default>
            <OrderbookTables />
          </template>
          <template #fallback><SkeletonTables /></template>
        </Suspense>
      </v-row>
    </v-container>
  </v-main>
</template>
