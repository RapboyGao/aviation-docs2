<template>
  <div v-for="(item, index) in choosingQuestions" :key="item._id" class="mt-50" :id="`pepec-${index}`">
    <PepecChoosingCard :index="index + 1" :question="item"></PepecChoosingCard>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { PepecChoosing } from "./pepec.types";
import PepecChoosingCard from "./PepecChoosingCard.vue";
defineProps<{
  choosingQuestions: PepecChoosing[];
}>();
</script>
