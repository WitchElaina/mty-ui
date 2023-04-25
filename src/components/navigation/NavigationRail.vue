<template>
  <div class="wrapper">
    <div class="container">
      <div class="menu" v-if="menu">
        <mty-icons icon="menu" />
      </div>
      <div class="fab" v-if="fab">
        <fa-button :icon="fab" />
      </div>
      <div class="navs">
        <router-link
          class="nav-item"
          v-for="nav in navs"
          :key="nav.id"
          :class="{ active: nav.link === $route.name }"
          :to="nav.link"
        >
          <mty-icons class="icon" :icon="nav.icon" />
          <div class="label label-medium" v-if="label">
            {{ nav.label }}
          </div>
          <div class="state-layer"></div>
          <div class="action-layer"></div>
        </router-link>
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
    border-right: 1px solid var(--md-sys-color-surface-variant);

    .menu {
      position: absolute;
      top: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
    }

    .fab {
      position: absolute;
      bottom: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .navs {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: flex-start;
      align-items: center;

      .nav-item {
        position: relative;
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--md-sys-color-on-surface-variant);
        text-decoration: none;

        .state-layer {
          position: absolute;
          top: 3px;
          width: 56px;
          height: 32px;
          background-color: var(--md-sys-color-on-surface-variant);
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
          z-index: 2;
        }

        .action-layer {
          position: absolute;
          top: 3px;
          width: 0px;
          height: 32px;
          background-color: var(--md-sys-color-secondary-container);
          border-radius: 16px;
          opacity: 0;
          transition: all 0.2s ease-in-out;
          z-index: 1;
        }

        &.router-link-exact-active {
          .state-layer {
            background-color: var(--md-sys-color-on-surface);
          }
          .action-layer {
            width: 56px;
            opacity: 1;
          }
          .icon {
            color: var(--md-sys-color-on-secondary-container);
          }
        }

        &:hover .state-layer {
          opacity: var(--md-sys-state-hover-state-layer-opacity);
        }

        &:active .state-layer {
          opacity: var(--md-sys-state-pressed-state-layer-opacity);
        }

        .icon {
          position: absolute;
          top: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          z-index: 3;
        }

        .label {
          position: absolute;
          bottom: 3px;
        }
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
