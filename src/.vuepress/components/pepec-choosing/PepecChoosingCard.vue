<template>
  <ElCard>
    <template #header>
      <div>
        <div class="flex space-between">
          <h3>
            {{ k0s(index, 3) }}
          </h3>
        </div>
      </div>
    </template>

    <template #default>
      <Ques>
        <div v-for="item in question.content" :key="item" class="flex-wrap">{{ item }}</div>
      </Ques>
      <ElDivider />
      <div :id="'choosing-' + index" @click="showAnswer = !showAnswer">
        <div v-for="(option, index) in shuffledOptions" :key="index">
          <ElCheckbox :model-value="showAnswer && option.right"> {{ String.fromCharCode(65 + index) }}. {{ option.content }} </ElCheckbox>
        </div>
      </div>
    </template>
  </ElCard>
</template>
<script setup lang="ts">
import { ElCard, ElCheckbox, ElDivider } from "element-plus";
import { defineProps, ref } from "vue";
import { k0s } from "../../../common";
import type { PepecChoosing } from "../pepec.types";
import _ from "lodash";
let showAnswer = ref(false);
const props = defineProps<{
  index: number;
  question: PepecChoosing;
}>();
const shuffledOptions = _.shuffle(props.question.options);
</script>
