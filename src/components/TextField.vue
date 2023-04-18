<template>
  <div
    :class="[type, { 'text-field--error': error }]"
    class="wrapper"
    @click="
      () => {
        if (!focused) $refs.inputNode.focus();
      }
    "
    @focusin="focusinHandler"
    @focusout="focusoutHandler($refs.inputNode)"
  >
    <div class="label body-large" ref="labelNode">
      {{ label }}
    </div>
    <div class="content" ref="contentNode">
      <mty-icons class="icon" v-if="icon" :icon="icon" :size="24" />
      <input
        type="text"
        ref="inputNode"
        :value="inputText"
        :placeholder="focused ? placeholder : ''"
        @input="$emit('update:inputText', $event.target.value)"
      />
      <icon-button
        class="trailing-icon"
        :class="{ 'trailing-icon--visible': inputText }"
        type="standard"
        :icon="error ? 'error' : 'clear'"
        @click="$emit('update:inputText', ''), focusoutHandler()"
      ></icon-button>
    </div>
    <div class="supporting-text body-small on-surface-variant-text">
      {{ supportingText }}
    </div>
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
import { watch, nextTick, onMounted, ref } from 'vue';

defineEmits(['update:inputText']);

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
  error: {
    type: Boolean,
    require: false,
    default: false,
  },
  type: {
    type: String,
    require: true,
    default: 'outlined',
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
const inputNode = ref(null);

onMounted(() => {
  nextTick(() => {
    // update --label-width
    contentNode.value.style.setProperty(
      '--label-width',
      `${labelNode.value.offsetWidth * 0.75}px`,
    );

    // pandding-left
    contentNode.value.style.setProperty(
      'padding-left',
      `${props.icon ? '12' : '16'}px`,
    );
    console.log(
      contentNode.value.style.getPropertyValue('padding-left'),
    );

    labelNode.value.style.setProperty(
      'left',
      `${props.icon ? 'calc(12px + 24px + 16px)' : '16px'}`,
    );

    labelNode.value.style.setProperty(
      '--left-offset',
      `${props.icon ? '-36px' : '0px'}`,
    );
  });
});

const setPopulated = () => {
  labelNode.value.classList.remove('body-large');
  labelNode.value.classList.add('populated', 'body-small');
  contentNode.value.classList.add('populated');
  inputNode.value.classList.add('populated');
};

const clearPopulated = (node) => {
  if (node === undefined) {
    labelNode.value.classList.remove('populated', 'body-small');
    labelNode.value.classList.add('body-large');
    contentNode.value.classList.remove('populated');
    inputNode.value.classList.remove('populated');
    return;
  }
  if (node.value === '') {
    labelNode.value.classList.remove('populated', 'body-small');
    labelNode.value.classList.add('body-large');
    contentNode.value.classList.remove('populated');
    inputNode.value.classList.remove('populated');
  }
};

const focusinHandler = () => {
  focused.value = true;
  setPopulated();
  labelNode.value.classList.add('focused');
};

const focusoutHandler = (node) => {
  focused.value = false;
  clearPopulated(node);
  labelNode.value.classList.remove('focused');
};

// watch inputText
watch(
  () => props.inputText,
  (newVal) => {
    if (newVal !== '') {
      setPopulated();
    } else {
      if (!focused.value) clearPopulated();
      else clearPopulated(inputNode);
    }
  },
);
</script>

<style lang="scss" scoped>
@import './../style/text-field/outlined-text-field.scss';
@import './../style/text-field/filled-text-field.scss';
</style>
