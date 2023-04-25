<template>
  <div class="display-large primary-text">Action Components</div>
  <div class="button-box">
    <common-button @click="onClick" type="elevated"
      >ElevatedButton</common-button
    >
    <common-button disable @click="onClick" type="elevated"
      >ElevatedButton</common-button
    >
    <common-button @click="onClick" type="elevated" icon="create"
      >ElevatedButton</common-button
    >
    <common-button
      disable
      @click="onClick"
      type="elevated"
      icon="create"
      >ElevatedButton</common-button
    >
  </div>

  <div class="button-box">
    <common-button @click="onClick" type="filled"
      >Filled Button</common-button
    >
    <common-button disable @click="onClick" type="filled"
      >Filled Button</common-button
    >
    <common-button @click="onClick" type="filled" icon="create"
      >Filled Button</common-button
    >
    <common-button
      disable
      @click="onClick"
      type="filled"
      icon="create"
      >Filled Button</common-button
    >
  </div>

  <div class="button-box">
    <common-button @click="onClick" type="tonal"
      >Tonal Button</common-button
    >
    <common-button disable @click="onClick" type="tonal"
      >Tonal Button</common-button
    >
    <common-button @click="onClick" type="tonal" icon="create"
      >Tonal Button</common-button
    >
    <common-button disable @click="onClick" type="tonal" icon="create"
      >Tonal Button</common-button
    >
  </div>

  <div class="button-box">
    <common-button @click="onClick" type="outlined"
      >Outlined Button</common-button
    >
    <common-button disable @click="onClick" type="outlined"
      >Outlined Button</common-button
    >
    <common-button @click="onClick" type="outlined" icon="create"
      >Outlined Button</common-button
    >
    <common-button
      disable
      @click="onClick"
      type="outlined"
      icon="create"
      >Outlined Button</common-button
    >
  </div>

  <div class="button-box">
    <common-button @click="onClick" type="text"
      >Text Button</common-button
    >
    <common-button disable @click="onClick" type="text"
      >Text Button</common-button
    >
    <common-button @click="onClick" type="text" icon="create"
      >Text Button</common-button
    >
    <common-button disable @click="onClick" type="text" icon="create"
      >Text Button</common-button
    >
  </div>

  <div class="button-box">
    <fa-button @click="onClick" icon="create" />
    <fa-button-small @click="onClick" icon="create" />
    <fa-button-large @click="onClick" icon="create" />
    <fa-button-ext @click="onClick" icon="create"
      >Extented FAB</fa-button-ext
    >
    <fa-button-ext @click="onClick">Without Icon</fa-button-ext>
  </div>

  <div class="button-box">
    <icon-button type="filled" @click="onClick" icon="settings" />
    <icon-button
      type="filled"
      disable
      @click="onClick"
      icon="settings"
    />
    <icon-toggle-button
      type="filled"
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <icon-toggle-button
      type="filled"
      disable
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <div class="body-medium primary-text">{{ globalToggle }}</div>
  </div>

  <div class="button-box">
    <icon-button type="tonal" @click="onClick" icon="settings" />
    <icon-button
      type="tonal"
      disable
      @click="onClick"
      icon="settings"
    />
    <icon-toggle-button
      type="tonal"
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <icon-toggle-button
      type="tonal"
      disable
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <div class="body-medium primary-text">{{ globalToggle }}</div>
  </div>

  <div class="button-box">
    <icon-button type="outlined" @click="onClick" icon="settings" />
    <icon-button
      type="outlined"
      disable
      @click="onClick"
      icon="settings"
    />
    <icon-toggle-button
      type="outlined"
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <icon-toggle-button
      type="outlined"
      disable
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <div class="body-medium primary-text">{{ globalToggle }}</div>
  </div>

  <div class="button-box">
    <icon-button type="standard" @click="onClick" icon="settings" />
    <icon-button
      type="standard"
      disable
      @click="onClick"
      icon="settings"
    />
    <icon-toggle-button
      type="standard"
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <icon-toggle-button
      type="standard"
      disable
      v-model:toggled="globalToggle"
      icon="settings"
    />
    <div class="body-medium primary-text">{{ globalToggle }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const onClick = () => {
  console.log('clicked');
};

const globalToggle = ref(false);
</script>
