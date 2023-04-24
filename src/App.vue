<template>
  <mty-nav-rail :navs="navs"><router-view /></mty-nav-rail>
</template>

<script setup>
const navs = [
  {
    icon: 'home',
    label: 'Home',
    link: '/',
  },
  {
    icon: 'accessibility_new',
    label: 'Action',
    link: '/actions',
  },
  {
    icon: 'input',
    label: 'Input',
    link: '/inputs',
  },
];
</script>

<style>
body {
  background-color: var(--md-sys-color-background);
}

.button-box {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
}

.display-large {
  margin: 30px;
}
</style>
