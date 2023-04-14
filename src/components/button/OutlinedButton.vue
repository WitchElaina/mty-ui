<template>
  <div
    class="outlined-button-wrapper"
    @mousemove="isHovering = true"
    @mouseout="isHovering = false"
    @mousedown="onPressed"
    @mouseup="onReleased"
  >
    <div
      class="outlined-button-content label-large"
      :class="{ disable: disable, 'primary-text': !disable }"
      :style="{ paddingLeft: $slots.default ? '16px' : '24px' }"
    >
      <div v-if="$slots.default" class="outlined-button-icon">
        <slot />
      </div>
      <div class="outlined-button-label">
        {{ label }}
      </div>
    </div>

    <div
      class="outlined-button-layer"
      ref="buttonLayer"
      :class="{ hovered: isHovering, disable: disable }"
    ></div>

    <div
      class="outlined-button-container"
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
    default: 'Outlined Button',
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
  name: 'OutlinedButton',
  install(app) {
    app.component('OutlinedButton', this);
  },
};
</script>

<style scoped>
button {
  border: none;
}

.outlined-button-wrapper {
  position: relative;
  width: fit-content;
  line-height: 40px;
  border-radius: 20px;
}

.outlined-button-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: (var(--md-sys-color-surface), 0);
  z-index: 0;
  border-radius: 20px;
  outline-color: var(--md-sys-color-outline);
  outline-width: 1px;
  outline-style: solid;
}

.outlined-button-container.disable {
  background-color: (var(--md-sys-color-on-surface), 0);
  opacity: 0.12;
}

.outlined-button-content {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-right: 24px;
  z-index: 2;
  user-select: none;
}
.outlined-button-content.disable {
  color: var(--md-sys-color-on-surface-variant);
  opacity: 0.38;
}

.outlined-button-label {
  z-index: 2;
}

.outlined-button-layer {
  background-color: var(--md-sys-color-primary);
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 20px;
}

.outlined-button-layer.disable {
  display: none;
}

.outlined-button-layer.pressed {
  opacity: var(--md-sys-state-pressed-state-layer-opacity);
}

.outlined-button-layer.hovered {
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}
</style>
