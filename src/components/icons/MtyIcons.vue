<template>
  <div class="mty-icons-wrapper">
    <span
      :class="iconClassName"
      :style="{
        fontSize: `${props.size}px`,
      }"
      >{{ icon }}
    </span>
  </div>
</template>

<script setup>
import 'material-symbols';
import 'material-icons';
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
    default: 'home',
  },
  size: {
    type: Number,
    required: false,
    default: 24,
  },
  type: {
    type: String,
    required: false,
    default: 'outlined',
  },
});

const iconClassName = computed(() => {
  switch (props.type) {
    case 'filled':
      return 'material-icons';
    case 'outlined':
      return 'material-icons-outlined';
    case 'round':
      return 'material-icons-round';
    case 'sharp':
      return 'material-icons-sharp';
    case 'two-tone':
      return 'material-icons-two-tone';
    default:
      return 'material-icons';
  }
});
</script>

<script>
export default {
  name: 'MtyIcons',
  install(app) {
    app.component('MtyIcons', this);
  },
};
</script>

<style scoped>
.mty-icons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
