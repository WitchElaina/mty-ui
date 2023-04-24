<template>
  <div class="wrapper">
    <div class="container">
      <div class="menu" v-if="menu">
        <mty-icons icon="menu" />
      </div>
      <div class="fab" v-if="fab"></div>
      <div class="navs">
        <div
          class="nav-item"
          v-for="nav in navs"
          :key="nav.id"
          :class="{ active: nav.link === $route.name }"
        >
          <mty-icons :icon="nav.icon" />
          <div class="label label-medium" v-if="label">
            {{ nav.label }}
          </div>
          <div class="state-layer"></div>
          <div class="action-layer"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MtyNavRail',
  install(app) {
    app.component('MtyNavRail', this);
  },
};
</script>

<script setup>
defineProps({
  menu: {
    type: Boolean,
    default: false,
  },
  fab: {
    type: String,
  },
  navs: {
    type: Array,
  },
  label: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  user-select: none;

  .container {
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 80px;
    height: 100vh;
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface-variant);

    .menu {
      position: absolute;
      top: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
    }

    .navs {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: flex-start;
      align-items: center;

      .nav-item {
        height: 56px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .content {
    flex: 1;
    height: 100vh;
    padding-left: 80px;
    overflow-y: scroll;
  }
}
</style>
