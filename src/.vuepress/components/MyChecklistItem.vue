<template>
  <div class="checklist-item" :data-item-id="itemID" @click="toggleChecked" :class="{ checked: isChecked }">
    <input type="checkbox" class="checklist-checkbox" v-model="isChecked" :id="`checkbox-${itemID}`" @click.prevent.stop />
    <label :for="`checkbox-${itemID}`" class="checklist-item-content">
      <slot></slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

defineProps<{
  itemID: string;
}>();

// 创建一个ref<boolean>来表示是否选中
const isChecked = ref(false);

// 切换选中状态的方法
function toggleChecked() {
  isChecked.value = !isChecked.value;
}
</script>

<style scoped>
.checklist-item {
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background-color: #f5f7fa;
  border-radius: 4px;
  border-left: 3px solid #42b983;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checklist-item:hover {
  background-color: #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.checklist-item.checked {
  background-color: #e6f7ee;
  border-left-color: #52c41a;
  transition: all 0.3s ease;
}

.checklist-item.checked .checklist-item-content {
  color: #005005;
  text-decoration: line-through;
  transition: all 0.3s ease;
}

.checklist-checkbox {
  margin-right: 0.75rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #52c41a;
}

.checklist-item-content {
  color: #333;
  line-height: 1.5;
  flex: 1;
  transition: all 0.3s ease;
}
</style>
