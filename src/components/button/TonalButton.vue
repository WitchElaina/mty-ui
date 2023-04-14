<template>
  <div
    class="tonal-button-wrapper"
    @mousemove="isHovering = true"
    @mouseout="isHovering = false"
    @mousedown="onPressed"
    @mouseup="onReleased"
  >
    <div
      class="tonal-button-content label-large"
      :class="{
        disable: disable,
        'on-secondary-container-text': !disable,
      }"
      :style="{ paddingLeft: $slots.default ? '16px' : '24px' }"
    >
      <div v-if="$slots.default" class="tonal-button-icon">
        <slot />
      </div>
      <div class="tonal-button-label">
        {{ label }}
      </div>
    </div>

    <div
      class="tonal-button-layer"
      ref="buttonLayer"
      :class="{ hovered: isHovering, disable: disable }"
    ></div>

    <div
      class="tonal-button-container"
      :class="{ disable: disable }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Tonal Button',
  },
  disable: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(['click']);

const buttonLayer = ref(null);

const isHovering = ref(false);

const onPressed = () => {
  if (props.disable) {
    return;
  }
  buttonLayer.value.classList.add('pressed');
  buttonLayer.value.classList.remove('hovered');
};

const onReleased = () => {
  if (props.disable) {
    return;
  }
  buttonLayer.value.classList.remove('pressed');
  buttonLayer.value.classList.add('hovered');
  emit('click');
};
</script>

<script>
export default {
  name: 'TonalButton',
  install(app) {
    app.component('TonalButton', this);
  },
};
</script>

<style scoped>
button {
  border: none;
}

.tonal-button-wrapper {
  position: relative;
  width: fit-content;
  line-height: 40px;
  border-radius: 20px;
  overflow: hidden;
}

.tonal-button-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--md-sys-color-secondary-container);
  z-index: 0;
}

.tonal-button-container.disable {
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.12;
}

.tonal-button-content {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-right: 24px;
  z-index: 2;
  user-select: none;
}
.tonal-button-content.disable {
  color: var(--md-sys-color-on-surface-variant);
  opacity: 0.38;
}

.tonal-button-label {
  z-index: 2;
}

.tonal-button-layer {
  background-color: var(--md-sys-color-on-secondary-container);
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 20px;
}

.tonal-button-layer.disable {
  display: none;
}

.tonal-button-layer.pressed {
  opacity: var(--md-sys-state-pressed-state-layer-opacity);
}

.tonal-button-layer.hovered {
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}
</style>
