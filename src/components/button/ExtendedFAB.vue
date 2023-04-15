<template>
  <div
    class="fab-wrapper"
    @mousedown="onPressed"
    @mouseup="onReleased"
    @mousemove="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div class="fab-container" :class="{ hovered: isHovering }"></div>
    <div
      class="fab-layer"
      ref="buttonLayer"
      :class="{ hovered: isHovering }"
    ></div>

    <div class="fab-content primary-text">
      <div v-if="$slots.default">
        <slot />
      </div>
      <div class="label label-large">{{ label }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  label: {
    type: String,
    required: true,
    default: 'Extended FAB',
  },
});

const emits = defineEmits(['click']);

const buttonLayer = ref(null);

const isHovering = ref(false);

const onPressed = () => {
  buttonLayer.value.classList.add('pressed');
  buttonLayer.value.classList.remove('hovered');
};

const onReleased = () => {
  buttonLayer.value.classList.remove('pressed');
  buttonLayer.value.classList.add('hovered');
  emits('click');
};
</script>

<script>
export default {
  name: 'FaButtonExt',
  install(app) {
    app.component('FaButtonExt', this);
  },
};
</script>

<style scoped>
.fab-wrapper {
  position: relative;
  width: fit-content;
  min-width: 80px;
  height: 56px;
  cursor: pointer;
  user-select: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
}

.fab-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: var(--md-sys-color-primary-container);
  z-index: 0;

  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  /* common shadow */
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.fab-container.hovered {
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12),
    0 5px 5px -3px rgba(0, 0, 0, 0.2);
}

.fab-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: var(--md-sys-color-on-primary-container);
  z-index: 1;
  opacity: 0;
}

.fab-layer.hovered {
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}

.fab-layer.pressed {
  opacity: var(--md-sys-state-pressed-state-layer-opacity);
}

.fab-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 16px;
  padding: 0 16px;
  gap: 8px;
  font-weight: 500;
}
</style>
