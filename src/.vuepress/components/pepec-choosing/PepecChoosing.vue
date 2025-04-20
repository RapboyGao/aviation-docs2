<template>
  <div>
    <ElLink v-for="pageIndex in pages" :key="pageIndex" :href="`#choosing-${pageIndex * 50}`" class="margin-left-right" type="primary">
      {{ pageIndex * 50 }}
    </ElLink>
  </div>
  <ElDivider></ElDivider>
  <div class="flex center">
    <el-checkbox v-model="useShuffle" label="Shuffled" size="large" class="margin-left-right" />
    <el-checkbox v-model="showFavoriteOnly" label="Favorites Only" size="large" class="margin-left-right" />
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
import store from "store2";
const props = defineProps<{
  choosingQuestions: PepecChoosing[];
}>();

let useShuffle = ref(false);
let showFavoriteOnly = ref(false);
let favoriteQuestions = computed(() => {
  return showFavoriteOnly.value
    ? props.choosingQuestions.filter((item) => {
        return store.get("favorite-" + item._id, false);
      })
    : props.choosingQuestions;
});
let shownQuestions = computed(() => {
  return useShuffle.value ? _.shuffle(favoriteQuestions.value) : favoriteQuestions.value;
});

let pages = computed(() => Math.ceil(shownQuestions.value.length / 50 - 1));
</script>
