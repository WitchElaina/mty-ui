<template>
  <div
    class="wrapper"
    :class="[type, { disable: disable }]"
    v-on="
      disable
        ? {}
        : {
            mouseover: mouseOverHandler,
            mouseleave: mouseLeaveHandler,
            mousedown: mouseDownHandler,
            mouseup: mouseUpHandler,
            focusin: focusInHandler,
            focusout: focusOutHandler,
          }
    "
  >
    <div class="container"></div>
    <div class="state-layer" :class="stateClass"></div>
    <div class="icon" v-if="icon">
      <mty-icons :size="18" :icon="icon" />
    </div>
    <div
      class="label label-large on-surface-text"
      :style="{ paddingLeft: `${icon ? 0 : 16}px` }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MtyAssistChip',
  install(app) {
    app.component('MtyAssistChip', this);
  },
};
</script>

<script setup>
import { ref } from 'vue';

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
  disable: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// emits
const emits = defineEmits(['click']);

const stateClass = ref({
  hovered: false,
  focused: false,
  pressed: false,
});

const mouseOverHandler = () => {
  stateClass.value.hovered = true;
};

const mouseLeaveHandler = () => {
  stateClass.value.hovered = false;
};

const focusInHandler = () => {
  stateClass.value.focused = true;
};

const focusOutHandler = () => {
  stateClass.value.focused = false;
};

const mouseDownHandler = () => {
  stateClass.value.pressed = true;
};

const mouseUpHandler = () => {
  stateClass.value.pressed = false;
  emits('click');
};
</script>

<style lang="scss" scoped>
@import '../../style/chip/common-chip.scss';
</style>
