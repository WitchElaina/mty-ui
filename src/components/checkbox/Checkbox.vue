<template>
  <div
    class="wrapper"
    :class="{ disable: disable, checked: isChecked }"
    v-on="
      disable
        ? {}
        : {
            mousedown: onPressed,
            mouseup: onReleased,
            mousemove: hoverHandler,
            mouseout: hoverHandler,
          }
    "
  >
    <div class="icon">
      <mty-icons v-if="isChecked" :icon="icon" :size="18" />
    </div>
    <div class="container"></div>
    <div
      class="layer"
      ref="layer"
      :class="{ hovered: isHovering }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'MtyCheckbox',
  install(app) {
    app.component('MtyCheckbox', this);
  },
};
</script>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  checked: {
    type: Boolean,
    required: false,
    default: false,
  },
  disable: {
    type: Boolean,
    required: false,
  },
  icon: {
    type: String,
    required: false,
    default: 'check',
  },
});

const emit = defineEmits(['update:checked']);

const isChecked = computed({
  get() {
    return props.checked;
  },
  set(value) {
    emit('update:checked', value);
  },
});

const isHovering = ref(false);

const hoverHandler = (event) => {
  isHovering.value = event.type === 'mousemove';
};

const layer = ref(null);

const onPressed = () => {
  layer.value.classList.add('pressed');
  layer.value.classList.remove('hovered');
};

const onReleased = () => {
  layer.value.classList.remove('pressed');
  layer.value.classList.add('hovered');
  emit('update:checked', !props.checked);
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;

  .container {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: -2px;
    transition: all 0.2s ease;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    left: 15px;
    width: 18px;
    height: 18px;
    transition: all 0.2s ease;
    z-index: 2;
  }

  .layer {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transition: all 0.2s ease;
    background-color: var(--md-sys-color-on-surface);
    opacity: 0;
  }

  &.checked {
    .container {
      background-color: var(--md-sys-color-primary);
      outline-color: var(--md-sys-color-primary);
    }

    .icon {
      color: var(--md-sys-color-on-primary);
    }

    .layer {
      background-color: var(--md-sys-color-primary);
    }
  }

  &.disable {
    cursor: default;

    .container {
      background-color: var(--md-sys-color-surface);
      opacity: 0.38;
    }

    .icon {
      color: var(--md-sys-color-surface);
    }

    layer.disable {
      display: none;
    }

    &.checked {
      .container {
        background-color: var(--md-sys-color-on-surface);
        outline-color: var(--md-sys-color-on-surface);
      }

      .icon {
        color: var(--md-sys-color-surface);
      }

      .layer {
        background-color: var(--md-sys-color-primary);
      }
    }
  }
}

.layer.hovered {
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}

.layer.pressed {
  opacity: var(--md-sys-state-pressed-state-layer-opacity);
}
</style>
