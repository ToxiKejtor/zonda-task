<script setup lang="ts">
import OrderbookTables from "@/components/OrderbookTables.vue";
import TickerPicker from "@/components/TickerPicker.vue";
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>

<template>
  <v-main>
    <v-container>
      <v-row justify="start">
        <v-col cols="12">
          <Suspense>
            <template #default>
              <TickerPicker />
            </template>
            <template #fallback>
              <AnimatedPlaceholder
                width="150px"
                height="56px"
                border-radius="5px"
              />
            </template>
          </Suspense>
        </v-col>
      </v-row>
      <v-row>
        <OrderbookTables />
      </v-row>
    </v-container>
  </v-main>
</template>
