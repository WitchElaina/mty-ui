<template>
  <div class="segmented-wrapper" draggable="false">
    <div
      class="button-wrapper"
      v-for="button in buttons"
      :key="button.id"
      :class="{ toggled: button.toggled }"
      @mouseover="handleMouseOver(button.id)"
      @mouseleave="handleMouseLeave(button.id)"
      @mousedown="handleMouseDown(button.id)"
      @mouseup="handleMouseUp(button.id)"
      :style="{
        width: wrapperWidth,
      }"
    >
      <div
        class="button-content label-large"
        :class="{ disable: button.disable }"
      >
        <div v-if="button.icon || button.toggled" class="button-icon">
          <mty-icons
            :type="button.iconType"
            :icon="button.toggled ? 'check' : button.icon"
            :size="18"
          />
        </div>
        <div class="button-label">
          {{ button.label }}
        </div>
      </div>

      <div
        class="button-layer"
        :class="{
          hovered: button.isHovering,
          disable: button.disable,
          pressed: button.isPressed,
        }"
      ></div>

      <div
        class="button-container"
        :class="{ disable: button.disable }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  selected: {
    type: Array,
    required: false,
  },
});

const buttons = ref([]);

onMounted(() => {
  buttons.value = props.options.map((option) => {
    return {
      id: option.id,
      label: option.label,
      icon: option.icon ? option.icon : '',
      iconType: option.iconType ? option.iconType : 'outlined',
      disable: option.disable ? option.disable : false,
      isHovering: false,
      toggled: option.toggled ? option.toggled : false,
    };
  });
});

// set initial selected
onMounted(() => {
  buttons.value.forEach((button) => {
    props.selected.forEach((id) => {
      if (button.id === id) {
        button.toggled = true;
      }
    });
  });
});

const emit = defineEmits(['update:selected']);

const curSelect = computed({
  get() {
    let selected = [];
    buttons.value.forEach((button) => {
      if (button.toggled) {
        selected.push(button.id);
      }
    });
    return selected;
  },
});

const handleMouseOver = (id) => {
  buttons.value.forEach((button) => {
    if (button.id === id) {
      button.isHovering = true;
    }
  });
};

const handleMouseLeave = (id) => {
  buttons.value.forEach((button) => {
    if (button.id === id) {
      button.isHovering = false;
    }
  });
};

const handleMouseDown = (id) => {
  buttons.value.forEach((button) => {
    if (button.id === id) {
      button.isHovering = false;
      button.isPressed = true;
    }
  });
};

const handleMouseUp = (id) => {
  // update modle
  buttons.value.forEach((button) => {
    // in selected array
    if (curSelect.value.includes(id)) {
      // if is selected, unselect
      if (button.id === id) {
        button.toggled = false;
      }
    } else {
      // if is not selected, select
      if (button.id === id) {
        button.toggled = true;
      }
    }
    // update v-modle
    emit('update:selected', curSelect.value);
  });

  // update ui
  buttons.value.forEach((button) => {
    if (button.id === id) {
      button.isHovering = true;
      button.isPressed = false;
    } else {
      button.isHovering = false;
      button.isPressed = false;
    }
  });
};

const wrapperWidth = computed(() => {
  // find longest label
  let longestLabel = '';
  buttons.value.forEach((button) => {
    if (button.label.length > longestLabel.length) {
      longestLabel = button.label;
    }
  });
  // cal px, 24 is left plus right padding, 18 is icon
  const px = longestLabel.length * 8 + 24 + 18;
  return px < 48 ? '48px' : `${px}px`;
});
</script>

<script>
export default {
  name: 'MultiSegmentedButton',
  install(app) {
    app.component('MultiSegmentedButton', this);
  },
};
</script>

<style scoped>
.segmented-wrapper {
  display: flex;
  flex-direction: row;
  outline-width: 1px;
  outline-style: solid;
  outline-color: var(--md-sys-color-outline);
  border-radius: 20px;
  overflow: hidden;
}

.button-wrapper {
  position: relative;
  width: fit-content;
  min-width: 48px;
  line-height: 40px;
  outline-style: solid;
  outline-width: 0px;
  outline-color: var(--md-sys-color-outline);
}

.button-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  outline: none;
}

.button-container.disable {
  opacity: 0.12;
}

.button-content {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0px 12px;
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

.button-wrapper:not(:last-child) {
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: var(--md-sys-color-outline);
}
</style>

<style lang="scss" scoped>
.button-wrapper {
  .button-content {
    color: var(--md-sys-color-on-surface);
  }
  .button-layer {
    background-color: var(--md-sys-color-on-surface);
  }
}

.button-wrapper.toggled {
  .button-content {
    color: var(--md-sys-color-on-secondary-container);
  }
  .button-layer {
    background-color: var(--md-sys-color-on-secondary-container);
  }
  .button-container {
    background-color: var(--md-sys-color-secondary-container);
  }
}
</style>
