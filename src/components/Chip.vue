<template>
  <div class="wrapper" :class="type">
    <div class="container"></div>
    <div class="state-layer"></div>
    <div class="icon">
      <mty-icon></mty-icon>
    </div>
    <div class="label label-large on-surface-text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MtyChip',
  install(app) {
    app.component('MtyChip', this);
  },
};
</script>

<script setup>
// props
defineProps({
  label: {
    type: String,
    required: true,
    default: 'Chip',
  },
  icon: {
    type: String,
    required: false,
  },
  iconType: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
    default: 'outlined',
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  &.outlined {
    .container {
      border: 1px solid var(--md-sys-color-outline);
    }
  }

  &.filled {
    .container {
      background-color: var(--md-sys-color-primary-container);
    }
  }

  .label {
    position: relative;
    top: 0;
    left: 0;
    padding: 0 16px;
  }
}
</style>
