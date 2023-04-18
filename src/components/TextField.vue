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
    <div class="label body-large" ref="labelNode">
      {{ label }}
    </div>
    <div class="content" ref="contentNode">
      <mty-icons class="icon" v-if="icon" :icon="icon" :size="24" />
      <input
        type="text"
        :value="inputText"
        @input="$emit('update:inputText', $event.target.value)"
        @focusin="focusinHandler"
        @focusout="focusoutHandler($event.target)"
      />
      <icon-button
        class="trailing-icon"
        type="standard"
        icon="clear"
        @click="$emit('update:inputText', ''), focusoutHandler()"
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
import { nextTick, onMounted, ref, watch } from 'vue';

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

const focused = ref(false);

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

const labelNode = ref(null);
const contentNode = ref(null);

onMounted(() => {
  nextTick(() => {
    // update --label-width
    contentNode.value.style.setProperty(
      '--label-width',
      `${labelNode.value.offsetWidth * 0.75}px`,
    );
  });
});

const focusinHandler = () => {
  focused.value = true;
  labelNode.value.classList.remove('body-large');
  labelNode.value.classList.add('populated', 'focused', 'body-small');
};

const focusoutHandler = (node) => {
  if (node === undefined) {
    labelNode.value.classList.remove('populated', 'body-small');
    labelNode.value.classList.add('body-large');
    return;
  }
  if (node.value === '') {
    focused.value = false;
    labelNode.value.classList.remove('populated', 'body-small');
    labelNode.value.classList.add('body-large');
  }
  labelNode.value.classList.remove('focused');
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .label {
    position: absolute;
    top: calc((56px - 24px) / 2);
    left: calc(12px + 24px + 16px);
    line-height: 24px;
    color: var(--md-sys-color-on-surface-variant);
    transition: all 0.2s ease-in-out;

    &.focused {
      color: var(--md-sys-color-primary);
    }

    &.populated {
      transform: translateX(-36px) translateY(-28px);
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
      outline-color: var(--md-sys-color-primary);
      z-index: 1;
      clip-path: polygon(
        -5px -5px,
        12px -5px,
        12px 8px,
        calc(var(--label-width) + 20px) 8px,
        calc(var(--label-width) + 20px) -5px,
        calc(100% + 5px) -5px,
        calc(100% + 5px) calc(100% + 5px),
        -5px calc(100% + 5px)
      );
    }

    .icon {
      transition: transform 0.2s ease-in-out;
      color: var(--md-sys-color-on-surface-variant);
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
      padding: 0;
      background-color: transparent;
      outline: none;
      transition: transform 0.2s ease-in-out;
      color: var(--md-sys-color-on-surface);
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
