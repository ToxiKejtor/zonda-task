<template>
  <h3>{{ title }}</h3>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Exchange rate</th>
        <th class="text-left">{{ currencyPairs.currency1 }} amount</th>
        <th class="text-left">Value in {{ currencyPairs.currency2 }}</th>
        <th class="text-left">Nb of offers</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in book" :key="i">
        <td>{{ item.rate }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.value }}</td>
        <td>{{ item.offers }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import type { OrderbookTableRow } from "@/types/OrderbookTableRow";
import { useCurrencyPairs } from "@/stores/useCurrencyPairs";
defineProps<{ book: OrderbookTableRow[]; title: string }>();
const currencyPairs = useCurrencyPairs();
</script>

<style scoped></style>
