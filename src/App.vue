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
    icon: 'edit',
    label: 'Input',
    link: '/inputs',
  },
];
</script>

<style>
body {
  background-color: var(--md-sys-color-background);
  margin: 0;
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
