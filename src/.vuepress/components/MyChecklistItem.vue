<template>
  <div class="checklist-item" :data-item-id="itemID" @click="toggleChecked" :class="{ checked: isChecked }">
    <div class="checkbox-container">
      <input type="checkbox" class="checklist-checkbox" :checked="isChecked" :id="`checkbox-${itemID}`" @click.prevent.stop @touchstart.prevent.stop />
      <label :for="`checkbox-${itemID}`" class="checkbox-label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="checkmark"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </label>
    </div>
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
  /* 移除左侧绿色边框 */
  border-left: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  cursor: pointer;
  transform-origin: left center;
  touch-action: manipulation; /* 优化触摸体验，防止浏览器默认行为 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); /* 添加触摸反馈 */
  /* 禁止文字选择 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checklist-item:hover {
  background-color: #e9ecef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(4px);
}

.checklist-item.checked {
  background-color: #e6f7ee;
  /* 移除选中状态的绿色边框 */
  border-left: none;
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
  content: "";
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
  border: 2px solid #52c41a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checklist-item.checked .checklist-checkbox {
  background-color: #52c41a;
  color: white;
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

.checkbox-container {
  position: relative;
  margin-right: 0.75rem;
  width: 20px;
  height: 20px;
}

.checklist-checkbox {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #52c41a;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.checklist-checkbox:checked + .checkbox-label {
  background-color: #52c41a;
  border-color: #52c41a;
  animation: checkbox-pulse 0.5s ease;
}

.checkmark {
  color: white;
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.checklist-checkbox:checked + .checkbox-label .checkmark {
  transform: scale(1);
  opacity: 1;
  transition-delay: 0.1s;
}

@keyframes checkbox-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* 夜间模式样式 */
html[data-theme="dark"] .checklist-item {
  background-color: #1e293b; /* 深灰色背景 */
}

html[data-theme="dark"] .checklist-item:hover {
  background-color: #0f172a; /* 近黑色悬停背景 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

html[data-theme="dark"] .checklist-item.checked {
  background-color: #1e293b; /* 保持深灰色背景 */
}

html[data-theme="dark"] .checklist-item.checked .checklist-item-content {
  color: #94a3b8; /* 浅灰色文字 */
}

html[data-theme="dark"] .checklist-item-content {
  color: #f8fafc; /* 白色文字 */
}

html[data-theme="dark"] .checklist-item-content span::after {
  background-color: #94a3b8; /* 匹配文字颜色 */
}

html[data-theme="dark"] .checkbox-label {
  border-color: #3b82f6; /* 蓝色边框 */
}

html[data-theme="dark"] .checklist-checkbox:checked + .checkbox-label {
  background-color: #3b82f6; /* 蓝色背景 */
  border-color: #3b82f6; /* 蓝色边框 */
}

html[data-theme="dark"] .checklist-checkbox:checked + .checkbox-label .checkmark {
  color: white; /* 白色对勾 */
}
</style>

/* 为确保所有子元素也禁止选择 */ .checklist-item * { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
