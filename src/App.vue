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
  <div class="button-box">
    <fa-button @click="onClick">
      <span class="material-symbols-outlined"> edit </span>
    </fa-button>
    <fa-button-small @click="onClick">
      <span class="material-symbols-outlined"> edit </span>
    </fa-button-small>
    <fa-button-large @click="onClick"> edit </fa-button-large>
    <fa-button-ext @click="onClick">
      <span class="material-symbols-outlined"> edit </span>
    </fa-button-ext>
    <fa-button-ext @click="onClick" label="Ext FAB Without Icon" />
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
  align-items: center;
}
</style>
