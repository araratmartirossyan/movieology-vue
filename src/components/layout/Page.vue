<template>
  <div class="tg-page">
    <div class="tg-page__top">
      <div class="prepend">
        <slot name="prepend" />
      </div>
      <div class="middle">
        <slot name="top" />
      </div>
      <div class="append">
        <div class="home-page__top" v-if="!hideLogin">
          <el-avatar
            v-if="authStore.loggedIn"
            @click="
              $router.push({
                name: 'profile'
              })
            "
            :size="32"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3EdZCJ7-noxgOD4QXA8SvxZWRSHFliZanJj2ndCpCREdPnY6U"
          />
          <img
            class="login-icon"
            v-else-if="!authStore.loggedIn"
            @click="
              $router.push({
                name: 'signIn'
              })
            "
            :size="32"
            src="@/assets/icons/login.png"
          />
        </div>
        <slot name="append" />
      </div>
    </div>

    <div class="tg-page__content">
      <slot />
    </div>

    <div class="tg-page__bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElAvatar } from 'element-plus'
import { defineComponent } from '@vue/runtime-core'
import { useAuthStore } from '@/stores'

defineComponent({
  name: 'Page'
})
const authStore = useAuthStore()

defineProps<{
  hideLogin?: boolean
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles';

.tg-page {
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 0;
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0)
    env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0);
  position: absolute;
  right: 0;
  top: 0;

  &__top {
    color: #fff;
    height: 70px;
    background: none;
    display: flex;
    position: fixed !important;
    width: 100%;
    padding: 0 $spacing-m;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  &__top,
  &__bottom {
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    z-index: 105;
  }
  &__content {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 104;
  }

  .login-icon {
    width: 32px;
    background-color: white;
    border-radius: $border-radius-s;
  }

  .prepend,
  .append,
  .middle {
    width: 100%;
  }

  .middle {
    text-align: center;
  }

  .append {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
