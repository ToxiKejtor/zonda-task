<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Exchange rate</th>
        <th class="text-left">--BTC-- amount</th>
        <th class="text-left">Value in --PLN--</th>
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
import type { IBook } from "@/stores/useOrderbook";
defineProps<{ book: IBook[] }>();
</script>

<style scoped></style>
