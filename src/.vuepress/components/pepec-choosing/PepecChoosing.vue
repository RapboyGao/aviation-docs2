<template>
  <div>
    <ElLink v-for="pageIndex in pages" :key="pageIndex" :href="`#choosing-${pageIndex * 50}`" class="margin-left-right" type="primary">
      {{ pageIndex * 50 }}
    </ElLink>
  </div>
  <ElDivider></ElDivider>
  <div class="flex center">
    <el-checkbox v-model="useShuffle" label="打乱顺序" size="large" />
  </div>
  <ElDivider></ElDivider>
  <div v-for="(item, index) in shownQuestions" :key="item._id" class="mt-50" :id="`pepec-${index}`">
    <PepecChoosingCard :index="index + 1" :question="item"></PepecChoosingCard>
  </div>
</template>
<script setup lang="ts">
import { ElDivider, ElLink, ElCheckbox } from "element-plus";
import { computed, defineProps, ref } from "vue";
import type { PepecChoosing } from "../pepec.types";
import PepecChoosingCard from "./PepecChoosingCard.vue";
import _ from "lodash";
const props = defineProps<{
  choosingQuestions: PepecChoosing[];
}>();
let totalLength = props.choosingQuestions;
let pages = Math.ceil(totalLength.length / 50 - 1);
let useShuffle = ref(false);
let shownQuestions = computed(() => {
  return useShuffle.value ? _.shuffle(totalLength) : totalLength;
});
</script>
