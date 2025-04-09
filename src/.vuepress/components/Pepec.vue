<template>
  <div>
    <el-checkbox v-model="sortBySize" label="长度倒序" size="large" />
    <el-checkbox v-model="filterByFavorites" label="只显示Favorites" size="large" />
    <div v-if="sortBySize">
      <a href="/music/mp3-hardest/001-050.mp3" target="_blank"> 000-050 </a>
      <a href="/music/mp3-hardest/051-100.mp3" target="_blank"> 051-100 </a>
      <a href="/music/mp3-hardest/101-150.mp3" target="_blank"> 101-150 </a>
      <a href="/music/mp3-hardest/151-200.mp3" target="_blank"> 151-200 </a>
      <a href="/music/mp3-hardest/201-250.mp3" target="_blank"> 201-250 </a>
      <a href="/music/mp3-hardest/251-300.mp3" target="_blank"> 251-300 </a>
    </div>
  </div>
  <ElDivider></ElDivider>
  <div class="flex flex-wrap">
    Jump to:
    <el-link v-for="i in 18" :key="i" :href="'#pepec-sentence-' + i * 50" class="margin-left-right">
      {{ i * 50 }}
    </el-link>
  </div>
  <ElDivider></ElDivider>
  <div v-for="(item, index) in sortedFiltered" :key="item.index" class="mt-50" :id="`pepec-${index}`">
    <ElCard>
      <template #header>
        <div :id="'pepec-sentence-' + index">
          <div class="flex space-between">
            <h3>
              {{ sortBySize ? `@${k0s(index + 1, 3)}` : "" }}
              {{ k0s(item.index, 3) }}
            </h3>
            <el-checkbox v-model="favorites[item.index]" label="Favorite" size="large" />
            <el-button @click="playAudio(item)" text type="primary">播放</el-button>
          </div>
        </div>
      </template>

      <template #default>
        <Ques v-if="getFirstFiveWordsWithCheck(item.content)">
          <div>
            <span>@{{ getFirstFiveWordsWithCheck(item.content) }}@</span>
          </div>
        </Ques>
        <ElDivider />
        <Ques>
          <div>
            <span v-if="item.mismatch || item.specialReading">官方原文： </span>
            <span>@{{ item.content }}@</span>
          </div>
          <div v-if="item.mismatch">
            <span>实际内容： </span>
            <span>@{{ item.mismatch }}@</span>
          </div>
          <div v-if="item.specialReading">
            <span>实际读法： </span>
            <span>@{{ item.specialReading }}@</span>
          </div>
        </Ques>
      </template>
    </ElCard>
  </div>
</template>
<script setup lang="ts">
import Ques from "./Ques.vue";
import pepec, { ContentProtocol, getActualLength } from "./pepec-data";
import { ElCheckbox, ElDivider, ElButton, ElCard, ElLink } from "element-plus";
import { ref, computed, watchEffect, onMounted } from "vue";
import { k0s } from "../../common";
import Store2 from "store2";

interface Favorites {
  [index: number]: boolean;
}

function getFavorites(): Favorites {
  return Store2.get("favorites-900s") ?? {};
}

function saveFavorites(favorites: Favorites) {
  Store2.set("favorites-900s", favorites, true);
}

function getSourceName(item: ContentProtocol): string {
  let fileName = k0s(item.index, 3);
  return `/music/mp3/${fileName}.mp3`;
}

let currentlyPlaying: HTMLAudioElement | undefined;

async function playAudio(item: ContentProtocol) {
  if (currentlyPlaying) {
    currentlyPlaying.pause();
    currentlyPlaying = undefined;
  } else {
    let src = getSourceName(item);
    currentlyPlaying = document.createElement("audio");
    currentlyPlaying.setAttribute("src", src);
    await currentlyPlaying.play();
    currentlyPlaying.addEventListener("ended", () => {
      currentlyPlaying = undefined;
    });
  }
}

const favorites = ref<Favorites>(getFavorites());

watchEffect(() => saveFavorites(favorites.value));

const sortBySize = ref(true);
const filterByFavorites = ref(false);

const sorted = computed(() => {
  if (sortBySize.value) {
    return pepec.sort(($0, $1) => getActualLength($1) - getActualLength($0));
  } else {
    return pepec.sort(($0, $1) => $0.index - $1.index);
  }
});

const sortedFiltered = computed(() => sorted.value.filter(($0) => (filterByFavorites.value ? favorites.value[$0.index] : true)));

function getFirstFiveWordsWithCheck(str: string): string | undefined {
  const words = str.trim().split(/\s+/);
  if (words.length < 5) {
    return undefined;
  }
  return words.slice(0, 5).join(" ");
}
</script>