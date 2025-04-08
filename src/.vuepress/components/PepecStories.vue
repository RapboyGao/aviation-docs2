<template>
  <div v-for="(item, index) in stories" :key="item.index" class="mt-50" :id="`pepec-${index}`">
    <ElCard>
      <template #header>
        <div>
          <div class="flex space-between">
            <h3>
              {{ k0s(item.index, 2) }}
            </h3>
            <el-checkbox v-model="favorites[item.index]" label="Favorite" size="large" />
            <!-- <el-button @click="playAudio(item)" text type="primary">播放</el-button> -->
          </div>
        </div>
      </template>

      <template #default>
        <Ques>
          <div>
            <span>@{{ item.content }}@</span>
          </div>
        </Ques>
        <ElDivider />
        <Ques>
          <div>
            <span>@{{ item.translation }}@</span>
          </div>
        </Ques>
      </template>
    </ElCard>
  </div>
</template>
<script setup lang="ts">
import Ques from "./Ques.vue";
import stories from "./pepec-stories";
import { ElCheckbox, ElDivider, ElButton, ElCard, ElLink } from "element-plus";
import { ref, computed, watchEffect, onMounted } from "vue";
import { k0s } from "../../common";
import Store2 from "store2";
interface Favorites {
  [index: number]: boolean;
}

function getFavorites(): Favorites {
  return Store2.get("favorites-pepec-stories") ?? {};
}

function saveFavorites(favorites: Favorites) {
  Store2.set("favorites-pepec-stories", favorites, true);
}
const favorites = ref<Favorites>(getFavorites());
watchEffect(() => saveFavorites(favorites.value));
</script>
<style scoped lang="scss">
.flex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
.mt-50 {
  margin-top: 50px;
}
</style>
