<template>
  <div
    class="button-wrapper"
    :class="{
      [$props.type]: true,
      toggled: isToggled,
    }"
    @mousemove="hoverHandler"
    @mouseout="hoverHandler"
    v-on="
      disable ? {} : { mousedown: onPressed, mouseup: onReleased }
    "
  >
    <div
      class="button-content label-large"
      :class="{ disable: disable }"
    >
      <div v-if="$props.icon" class="button-icon">
        <mty-icons
          :type="isToggled ? 'filled' : 'outlined'"
          :icon="$props.icon"
          :size="24"
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
  name: 'IconToggleButton',
  install(app) {
    app.component('IconToggleButton', this);
  },
};
</script>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'filled',
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
  toggled: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(['update:toggled']);

const buttonLayer = ref(null);

const isHovering = ref(false);

const hoverHandler = (event) => {
  isHovering.value = event.type === 'mousemove';
};

const isToggled = computed({
  get() {
    return props.toggled;
  },
  set(value) {
    emit('update:toggled', value);
  },
});

const onPressed = () => {
  buttonLayer.value.classList.add('pressed');
  buttonLayer.value.classList.remove('hovered');
};

const onReleased = () => {
  buttonLayer.value.classList.remove('pressed');
  buttonLayer.value.classList.add('hovered');
  isToggled.value = !isToggled.value;
};
</script>

<style scoped>
@import '../../style/icon-toggle-button/filled-icon-button.scss';
@import '../../style/icon-toggle-button/filled-tonal-icon-button.scss';
@import '../../style/icon-toggle-button/outlined-icon-button.scss';
@import '../../style/icon-toggle-button/standard-icon-button.scss';

.button-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
}

.button-container {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
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
  padding: 12px;
  gap: 8px;
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
  left: 4px;
  top: 4px;
  width: 40px;
  height: 40px;
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
