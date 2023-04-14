<template>
  <div class="button-box">
    <elevated-button @click="onClick" />
    <elevated-button disable @click="onClick" />
  </div>
  <div class="button-box">
    <filled-button @click="onClick" />
    <filled-button disable @click="onClick" />
  </div>
  <div class="button-box">
    <tonal-button @click="onClick" />
    <tonal-button disable @click="onClick" />
  </div>
  <div class="button-box">
    <outlined-button @click="onClick" />
    <outlined-button disable @click="onClick" />
  </div>
  <div class="button-box">
    <text-button @click="onClick" />
    <text-button disable @click="onClick" />
  </div>
</template>

<script setup>
const onClick = () => {
  console.log('clicked');
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

body {
  background-color: var(--md-sys-color-background);
}

.button-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}
</style>
