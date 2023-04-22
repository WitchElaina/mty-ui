<template>
  <div
    class="wrapper"
    :class="[type, { disable: disable, selected: selected }]"
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
    <div class="icon" :class="{ iconVisable: icon || selected }">
      <mty-icons
        :size="18"
        :icon="selected ? 'check' : icon ? icon : 'check'"
      />
    </div>
    <div class="label label-large on-surface-text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MtyFilterChip',
  install(app) {
    app.component('MtyFilterChip', this);
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
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// emits
const emits = defineEmits(['update:selected']);

const stateClass = ref({
  hovered: false,
  focused: false,
  pressed: false,
  toggled: false,
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
  stateClass.value.toggled = !stateClass.value.toggled;
  emits('update:selected', stateClass.value.toggled);
};
</script>

<style lang="scss" scoped>
@import '../../style/chip/common-chip.scss';

.wrapper {
  &.toggled {
    .state-layer {
      background-color: var(--md-sys-color-primary);
    }
  }

  &.outlined,
  &.elevated {
    .icon {
      width: 0px;
      height: 0px;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      &.iconVisable {
        width: 18px;
        height: 18px;
        opacity: 1;
      }
    }
  }

  &.outlined.disable,
  &.elevated.disable {
    .icon {
      width: 0px;
      height: 0px;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      &.iconVisable {
        width: 18px;
        height: 18px;
        opacity: 0.38;
      }
    }
  }

  &.outlined {
    &.selected {
      .container {
        background-color: var(--md-sys-color-secondary-container);
        outline: none;
      }
    }
  }
  &.elevated {
    &.selected {
      .container {
        background-color: var(--md-sys-color-secondary-container);
      }
    }
  }
  &.outlined,
  &.elevated {
    &.disable.selected {
      .container {
        background-color: var(--md-sys-color-on-secondary-container);
      }
    }
  }
}
</style>
