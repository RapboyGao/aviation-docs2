<template>
  <PepecChoosing :choosing-questions="allSecrets.concat(allBasics)"></PepecChoosing>
</template>

<script setup lang="ts">
import PepecChoosing from "./PepecChoosing.vue";
import allBasics from "./pepec-choosing-basic";
import allSecrets from "./pepec-choosing-secret";
</script>
