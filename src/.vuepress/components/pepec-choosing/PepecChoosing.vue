<template>
  <div>
    <ElLink v-for="pageIndex in pages" :key="pageIndex" :href="`#choosing-${pageIndex * 50}`" class="margin-left-right">
      {{ pageIndex * 50 }}
    </ElLink>
  </div>
  <div v-for="(item, index) in choosingQuestions" :key="item._id" class="mt-50" :id="`pepec-${index}`">
    <PepecChoosingCard :index="index + 1" :question="item"></PepecChoosingCard>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { PepecChoosing } from "../pepec.types";
import PepecChoosingCard from "./PepecChoosingCard.vue";
import { ElLink } from "element-plus";
import { k0s } from "../../../common";

const props = defineProps<{
  choosingQuestions: PepecChoosing[];
}>();
let totalLength = props.choosingQuestions;
let pages = Math.ceil(totalLength.length / 50 - 1);
</script>
