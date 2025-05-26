<template>
  <PepecChoosing :choosing-questions="allBasicsUnique"></PepecChoosing>
</template>

<script setup lang="ts">
import PepecChoosing from "./pepec-choosing/PepecChoosing.vue";
import allBasicsUnique from "./pepec-choosing";
// 在Console中打印所有的题目
// const simplified = allBasicsUnique.map((item, index) => {
//   return {
//     id: item._id,
//     index: index + 1,
//     question: item.content.join("\n"),
//     options: item.options.map((option) => {
//       return {
//         id: option.index,
//         content: option.content,
//         isCorrect: option.right,
//       };
//     }),
//   };
// });
// console.log("someProps", simplified);
// const simplifiedMarkdown = simplified
//   .map((item) => {
//     return (
//       `### ${item.index}\n${item.question}\n` +
//       item.options
//         .map((option) => {
//           return `- [${option.isCorrect ? "x" : " "}] ${option.content}`;
//         })
//         .join("\n")
//     );
//   })
//   .join("\n\n");

// console.log(simplifiedMarkdown);
</script>
