<template>
  <div class="preloader">
    <div class="dl">
      <div class="dl__container">
        <div class="dl__corner--top"></div>
        <div class="dl__corner--bottom"></div>
      </div>
      <div class="dl__square"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.preloader {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 999;
  background-color: #1e1b26;
  overflow: hidden;
}
@-webkit-keyframes dyinglight {
  15% {
    transform: scale(1.6);
  }
  50% {
    transform: rotate(-89deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}

@keyframes dyinglight {
  15% {
    transform: scale(1.6);
  }
  50% {
    transform: rotate(-89deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}
.dl {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
}

.dl__square {
  display: block;
  width: 50px;
  height: 50px;
  background: #4285f4;
}

.dl__container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  transform-origin: 50% 50% 0;
  -webkit-animation: dyinglight 1s ease infinite;
  animation: dyinglight 1s ease infinite;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.dl__corner--top:before,
.dl__corner--top:after,
.dl__corner--bottom:before,
.dl__corner--bottom:after {
  position: absolute;
  width: 17px;
  height: 17px;
  color: #4285f4;
  content: '';
}

.dl__corner--top:before {
  border-left: 1px solid;
  border-top: 1px solid;
  top: -6px;
  left: -6px;
}
.dl__corner--top:after {
  border-right: 1px solid;
  border-top: 1px solid;
  top: -6px;
  right: -6px;
}

.dl__corner--bottom:before {
  border-left: 1px solid;
  border-bottom: 1px solid;
  bottom: -6px;
  left: -6px;
}
.dl__corner--bottom:after {
  border-right: 1px solid;
  border-bottom: 1px solid;
  bottom: -6px;
  right: -6px;
}
</style>
