<template>
  <v-col cols="12" md="6">
    <v-card>
      <v-card-text>
        <div class="table-skeleton">
          <AnimatedPlaceholder
            v-for="i in 10"
            border-radius="5px"
            height="36px"
            key="i"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-col>
  <v-col cols="12" md="6">
    <v-card>
      <v-card-text>
        <div class="table-skeleton">
          <AnimatedPlaceholder
            v-for="i in 10"
            border-radius="5px"
            height="36px"
            key="i"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
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
