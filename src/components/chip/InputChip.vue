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
      :style="{
        paddingLeft: `${icon ? 0 : 12}px`,
        paddingRight: `${trailingIcon ? 0 : 12}px`,
      }"
    >
      <slot />
    </div>
    <div class="trailing-icon">
      <mty-icons :size="18" icon="close" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MtyInputChip',
  install(app) {
    app.component('MtyInputChip', this);
  },
};
</script>

<script setup>
import { ref } from 'vue';

// props
defineProps({
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
  trailingIcon: {
    type: Boolean,
    required: false,
    default: true,
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

.wrapper {
  .trailing-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 8px;
    color: var(--md-sys-color-on-surface-variant);
    z-index: 3;
  }

  &.disable {
    .trailing-icon {
      opacity: 0.38;
    }
  }
}
</style>
