<template>
  <div class="wrapper"></div>
</template>

<script>
export default {
  name: 'MtyDivider',
  install(app) {
    app.component('MtyDivider', this);
  },
};
</script>

<style scoped>
.wrapper {
  height: 1px;
  width: 100%;
  background-color: var(--md-sys-color-outline-variant);
}
</style>
