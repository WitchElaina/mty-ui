<template>
  <div class="display-large primary-text">Mty UI Demo</div>
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
  <div class="button-box">
    <segmented-button
      :options="[
        { id: 'songs', label: 'Songs', icon: 'audiotrack' },
        { id: 'albums', label: 'Albums', icon: 'album' },
        { id: 'podcasts', label: 'Podcasts', icon: 'podcasts' },
      ]"
      v-model:selected="selected"
    />
    <div class="body-medium primary-text">"{{ selected }}"</div>
  </div>
  <div class="button-box">
    <multi-segmented-button
      :options="[
        { id: 'songs', label: 'Songs', icon: 'audiotrack' },
        { id: 'albums', label: 'Albums', icon: 'album' },
        { id: 'podcasts', label: 'Podcasts', icon: 'podcasts' },
      ]"
      v-model:selected="multiSelected"
    />
    <div class="body-medium primary-text">{{ multiSelected }}</div>
  </div>
  <div class="button-box">
    <mty-checkbox v-model:checked="globalToggle" />
    <mty-checkbox disable v-model:checked="globalToggle" />
    <div class="body-medium primary-text">{{ globalToggle }}</div>
  </div>
  <div class="button-box">
    <text-field
      icon="search"
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      :validator="() => false"
      error-text="Error Text"
      icon="search"
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      icon="search"
      label="Label"
      supporting-text="Supporting Text"
      prefix="$"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      icon="search"
      label="Label"
      supporting-text="Supporting Text"
      suffix="px"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      type="filled"
      icon="search"
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      :validator="() => false"
      error-text="Error Text"
      type="filled"
      icon="search"
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      type="filled"
      icon="search"
      label="Label"
      prefix="$"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      type="filled"
      icon="search"
      label="Label"
      suffix="px"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      :validator="() => false"
      error-text="Error Text"
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      disable
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      type="filled"
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      type="filled"
      :validator="() => false"
      error-text="Error Text"
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <text-field
      type="filled"
      disable
      label="Label"
      supporting-text="Supporting Text"
      v-model:inputText="inputText"
    />
  </div>
  <div class="button-box">
    <mty-chip type="outlined">AssistChip</mty-chip>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const onClick = () => {
  console.log('clicked');
};

const globalToggle = ref(false);

const selected = ref('songs');
const multiSelected = ref(['songs', 'albums']);

const inputText = ref('');
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
}

body {
  margin-top: 40px;
  background-color: var(--md-sys-color-background);
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button-box {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
