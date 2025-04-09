<template>
  <div v-for="(item, index) in choosingQuestions" :key="item._id" class="mt-50" :id="`pepec-${index}`">
    <PepecChoosingCard :index="index" :question="item"></PepecChoosingCard>
  </div>
</template>
<script setup lang="ts">
import PepecChoosingCard from "./PepecChoosingCard.vue";
import { defineProps, ref } from "vue";
import { ElCard, ElDivider, ElCheckbox } from "element-plus";
import { k0s } from "../../common";
let showAnswer = ref({});
defineProps({
  choosingQuestions: {
    type: Array,
    required: true,
  },
});
</script>
