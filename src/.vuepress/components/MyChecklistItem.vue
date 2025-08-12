<template>
  <div class="checklist-item" :data-item-id="itemID" @click="toggleChecked" @touchstart.prevent="toggleChecked" :class="{ checked: isChecked }">
    <transition name="checkbox" mode="out-in">
      <input
        key="checkbox-{{ itemID }}"
        type="checkbox"
        class="checklist-checkbox"
        :checked="isChecked"
        :id="`checkbox-${itemID}`"
        @click.prevent.stop
        @touchstart.prevent.stop
      />
    </transition>
    <label :for="`checkbox-${itemID}`" class="checklist-item-content">
      <transition name="content" mode="out-in">
        <span key="content-{{ itemID }}"><slot></slot></span>
      </transition>
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
  padding: 0.75rem; /* 保持足够的内边距，确保触摸目标足够大 */
  min-height: 48px; /* 确保触摸目标至少48px高 */
  background-color: #f5f7fa;
  border-radius: 4px;
  border-left: 3px solid #42b983;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  cursor: pointer;
  transform-origin: left center;
  touch-action: manipulation; /* 优化触摸体验，防止浏览器默认行为 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); /* 添加触摸反馈 */
}

.checklist-item:hover {
  background-color: #e9ecef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(4px);
}

.checklist-item.checked {
  background-color: #e6f7ee;
  border-left-color: #52c41a;
  transform: translateX(4px);
}

.checklist-item.checked .checklist-item-content {
  color: #666666; /* 更淡的灰色代替深绿色 */
  transition: color 0.4s ease-in-out; /* 添加颜色过渡动画 */
}

.checklist-item-content {
  color: #333;
  line-height: 1.5;
  flex: 1;
  transition: color 0.4s ease-in-out; /* 添加颜色过渡动画 */
}

/* 为span添加样式 */
.checklist-item-content span {
  position: relative;
}

/* 添加文字划线动画 */
.checklist-item-content span::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background-color: #666666; /* 划线颜色也变淡 */
  transition: width 0.4s ease-in-out;
}

.checklist-item.checked .checklist-item-content span::after {
  width: 100%;
}

.checklist-checkbox {
  margin-right: 0.75rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #52c41a;
  transition: transform 0.3s ease;
}

.checklist-checkbox:checked {
  transform: scale(1.2);
}

.checklist-item-content {
  color: #333;
  line-height: 1.5;
  flex: 1;
}

/* 动画效果 */
.checkbox-enter-active,
.checkbox-leave-active {
  transition: transform 0.3s ease;
}

.checkbox-enter-from {
  transform: scale(0);
}

.checkbox-leave-to {
  transform: scale(0);
}

.content-enter-active,
.content-leave-active {
  transition: all 0.3s ease;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

/* 添加触摸反馈样式 */
.checklist-item:active {
  transform: scale(0.98);
  transition: transform 0.1s ease;
}
</style>
