<template>
  <page class="profile-page">
    <template #prepend>
      <gs-icon icon="arrow-left" size="32" @click="$router.back()" />
    </template>
    <div class="profile-page__info">
      <el-avatar
        :size="100"
        src="https://image.flaticon.com/icons/png/512/2586/2586717.png"
      />

      <div class="profile-page__info_block">
        <h2>
          {{ userStore.profile.username }}
        </h2>
      </div>
    </div>
  </page>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
import { ElAvatar } from 'element-plus'
import GsIcon from '@/components/Icons/GsIcon.vue'
const userStore = useUserStore()
</script>

<style lang="scss">
@import '@/assets/styles';

.profile-page {
  &__info {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_block {
      color: $color-white;
    }
  }
}
</style>
