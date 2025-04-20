<template>
  <div v-for="(item, index) in choosingQuestions" :key="item._id" class="mt-50" :id="`pepec-${index}`">
    <PepecChoosingCard :index="index + 1" :question="item"></PepecChoosingCard>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { PepecChoosing } from "./pepec-choosing";
import PepecChoosingCard from "./PepecChoosingCard.vue";
let showAnswer = ref({});
defineProps<{
  choosingQuestions: PepecChoosing[];
}>();
</script>
