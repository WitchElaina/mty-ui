<template>
  <div class="display-large primary-text title">Mty UI</div>
  <div class="headline-medium secondary-text subtitle">
    A Material You UI and components library for Vue3.
  </div>
  <div class="button">
    <common-button type="tonal" icon="code" @click="openGithub">
      Github
    </common-button>
    <common-button type="outlined" icon="book" @click="openDocs">
      Documentation
    </common-button>
  </div>
</template>

<script setup>
const openDocs = () => {
  window.open('https://witchelaina.github.io/mty-ui', '_blank');
};

const openGithub = () => {
  window.open('https://github.com/WitchElaina/mty-ui', '_blank');
};
</script>

<style lang="scss" scoped>
.title,
.subtitle {
  text-align: center;
}

.button {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
}
</style>
