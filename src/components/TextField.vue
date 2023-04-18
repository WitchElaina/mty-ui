<!-- Container outline (enabled)
Label text (unpopulated)
Leading icon (optional)
Label text (populated)
Trailing icon (optional)
Container outline (focused)
Caret
Input text
Supporting text (optional) -->

<template>
  <div class="wrapper">
    <div class="label" ref="label">{{ label }}</div>
    <div class="content">
      <mty-icons class="icon" v-if="icon" :icon="icon" :size="24" />
      <input
        type="text"
        :value="inputText"
        @input="$emit('update:inputText', $event.target.value)"
        @focusin="$refs.label.classList.add('focused')"
        @focusout="$refs.label.classList.remove('focused')"
      />
      <icon-button
        class="trailing-icon"
        type="standard"
        icon="clear"
        @click="$emit('update:inputText', '')"
      ></icon-button>
    </div>
    <div class="supporting-text"></div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  install(app) {
    app.component('TextField', this);
  },
};
</script>

<script setup>
import { computed, ref } from 'vue';

defineEmits(['update:props.input']);

const props = defineProps({
  label: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: false,
  },
  trailingIcon: {
    type: String,
    require: false,
  },
  supportingText: {
    type: String,
    require: false,
  },
  inputText: {
    type: String,
    require: true,
  },
  placeholder: {
    type: String,
    require: false,
    default: 'Input here.',
  },
});

//  .-------------------.      .-- label ----------.
//  |                   |      |                   |
//  |     Label         |  ->  |                   |
//  |___________________|      |___________________|
//
//  Use clip-path to make the label text appear as if it's floating above the input field.
//                             .__ label __________.
//                             |  |_____|          |
//                             |                   |
//                             |___________________|

const labelWidth = computed(() => {
  let labelLength = props.label.length;
  return labelLength * 8 + 16;
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .label {
    position: absolute;
    top: (56px - 24px) / 2;
    left: 12px + 24px + 16px;
    line-height: 24px;
    color: var(--md-sys-color-text-secondary);
    transition: transform 0.2s ease-in-out;

    &.focused {
      transform: translateX(-40px) translateY(-28px) scale(0.75);
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: fit-content;
    height: 56px;
    padding-left: 12px;
    gap: 16px;
    border-radius: 4px;

    outline-color: var(--md-sys-color-outline);
    outline-style: solid;
    outline-width: 1px;
    transition: outline-width 0.2s ease-in-out;

    &:focus-within {
      outline-width: 2px;
      z-index: 1;
    }

    .icon {
      transition: transform 0.2s ease-in-out;
    }

    .trailing-icon {
      transition: transform 0.2s ease-in-out;
    }

    input {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      border: none;
      background-color: transparent;
      outline: none;
      transition: transform 0.2s ease-in-out;
    }

    .supporting-text {
      bottom: 0;
      left: 0;
      padding: 0 16px;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      transform: translateY(50%);
      transition: transform 0.2s ease-in-out;
    }
  }
}
</style>
