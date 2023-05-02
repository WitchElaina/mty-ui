<template>
  <div
    class="button-wrapper"
    :class="[$props.type, disable ? 'disable' : '']"
    @mousemove="hoverHandler"
    @mouseout="hoverHandler"
    v-on="
      disable ? {} : { mousedown: onPressed, mouseup: onReleased }
    "
  >
    <div
      class="button-content label-large"
      :class="{ disable: disable }"
      :style="{
        padding:
          $props.type === 'text'
            ? $props.icon
              ? '0 16px 0 12px'
              : '0 12px'
            : $props.icon
            ? '0 24px 0 16px'
            : '0 24px',
      }"
    >
      <div v-if="$props.icon" class="button-icon">
        <mty-icons
          :type="$props.iconType"
          :icon="$props.icon"
          :size="18"
        />
      </div>
      <div class="button-label">
        <slot />
      </div>
    </div>

    <div
      class="button-layer"
      ref="buttonLayer"
      :class="{ hovered: isHovering, disable: disable }"
    ></div>

    <div class="button-container" :class="{ disable: disable }"></div>
  </div>
</template>

<script>
export default {
  name: 'CommonButton',
  install(app) {
    app.component('CommonButton', this);
  },
};
</script>

<script setup>
import { ref } from 'vue';

defineProps({
  type: {
    type: String,
    required: true,
    default: 'elevated',
  },
  icon: {
    type: String,
    required: false,
  },
  iconType: {
    type: String,
    required: false,
  },
  disable: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(['click']);

const buttonLayer = ref(null);

const isHovering = ref(false);

const hoverHandler = (event) => {
  isHovering.value = event.type === 'mousemove';
};

const onPressed = () => {
  buttonLayer.value.classList.add('pressed');
  buttonLayer.value.classList.remove('hovered');
};

const onReleased = () => {
  buttonLayer.value.classList.remove('pressed');
  buttonLayer.value.classList.add('hovered');
  emit('click');
};
</script>

<style scoped>
@import '../../style/button/elevated-button.scss';
@import '../../style/button/filled-button.scss';
@import '../../style/button/tonal-button.scss';
@import '../../style/button/text-button.scss';
@import '../../style/button/outlined-button.scss';

.button-wrapper {
  position: relative;
  width: fit-content;
  line-height: 40px;
  border-radius: 20px;
  cursor: pointer;
}

.button-wrapper.disable {
  cursor: not-allowed;
}

.button-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 0;
}

.button-container.disable {
  opacity: 0.12;
}

.button-content {
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 8px;
  padding-right: 24px;
  z-index: 2;
  user-select: none;
}
.button-content.disable {
  opacity: 0.38;
}

.button-icon {
  display: flex;
  align-items: center;
}

.button-layer {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 20px;
}

.button-layer.disable {
  display: none;
}

.button-layer.pressed {
  opacity: var(--md-sys-state-pressed-state-layer-opacity);
}

.button-layer.hovered {
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}
</style>
