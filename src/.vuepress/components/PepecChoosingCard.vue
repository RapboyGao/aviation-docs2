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
        <div>
          <span>@{{ question.content[0] }}@</span>
        </div>
      </Ques>
      <ElDivider />
      <div @click="showAnswer = !showAnswer">
        <div v-for="(option, index) in question.options" :key="index">
          <ElCheckbox :model-value="showAnswer && option.right"> {{ option.index }}. {{ option.content }} </ElCheckbox>
        </div>
      </div>
    </template>
  </ElCard>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import { ElCard, ElDivider, ElCheckbox } from "element-plus";
import { k0s } from "../../common";
let showAnswer = ref(0);
defineProps({
  question: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
