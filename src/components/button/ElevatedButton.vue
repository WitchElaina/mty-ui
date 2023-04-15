<template>
  <div
    class="elevated-button-wrapper"
    @mousemove="isHovering = true"
    @mouseout="isHovering = false"
    @mousedown="onPressed"
    @mouseup="onReleased"
  >
    <div
      class="elevated-button-content label-large"
      :class="{ disable: disable, 'primary-text': !disable }"
      :style="{ paddingLeft: $slots.default ? '16px' : '24px' }"
    >
      <div v-if="$slots.default" class="elevated-button-icon">
        <slot />
      </div>
      <div class="elevated-button-label">
        {{ label }}
      </div>
    </div>

    <div
      class="elevated-button-layer"
      ref="buttonLayer"
      :class="{ hovered: isHovering, disable: disable }"
    ></div>

    <div
      class="elevated-button-container"
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
    default: 'Elevated Button',
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
  name: 'ElevatedButton',
  install(app) {
    app.component('ElevatedButton', this);
  },
};
</script>

<style scoped>
button {
  border: none;
}

.elevated-button-wrapper {
  position: relative;
  width: fit-content;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 0px 1px 10px -5px var(--md-sys-color-shadow);
}

.elevated-button-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: var(--md-sys-color-surface);
  z-index: 0;
}

.elevated-button-container.disable {
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.12;
}

.elevated-button-content {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-right: 24px;
  z-index: 2;
  user-select: none;
}
.elevated-button-content.disable {
  color: var(--md-sys-color-on-surface-variant);
  opacity: 0.38;
}

.elevated-button-label {
  z-index: 2;
}

.elevated-button-layer {
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

.elevated-button-layer.disable {
  display: none;
}

.elevated-button-layer.pressed {
  opacity: var(--md-sys-state-pressed-state-layer-opacity);
}

.elevated-button-layer.hovered {
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}
</style>
