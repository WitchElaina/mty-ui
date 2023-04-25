<template>
  <div class="display-large primary-text">Input Components</div>
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
    <mty-assist-chip type="outlined">AssistChip</mty-assist-chip>
    <mty-assist-chip type="outlined" icon="local_taxi"
      >AssistChip</mty-assist-chip
    >
    <mty-assist-chip disable type="outlined"
      >AssistChip</mty-assist-chip
    >
    <mty-assist-chip disable type="outlined" icon="local_taxi"
      >AssistChip</mty-assist-chip
    >
  </div>
  <div class="button-box">
    <mty-assist-chip type="elevated">AssistChip</mty-assist-chip>
    <mty-assist-chip type="elevated" icon="local_taxi"
      >AssistChip</mty-assist-chip
    >
    <mty-assist-chip disable type="elevated"
      >AssistChip</mty-assist-chip
    >
    <mty-assist-chip disable type="elevated" icon="local_taxi"
      >AssistChip</mty-assist-chip
    >
  </div>
  <div class="button-box">
    <mty-filter-chip v-model:selected="globalToggle" type="outlined"
      >Filter Chip</mty-filter-chip
    >
    <mty-filter-chip
      v-model:selected="globalToggle"
      type="outlined"
      icon="local_taxi"
      >Filter Chip</mty-filter-chip
    >
    <mty-filter-chip
      v-model:selected="globalToggle"
      disable
      type="outlined"
      >Filter Chip</mty-filter-chip
    >
    <mty-filter-chip
      v-model:selected="globalToggle"
      disable
      type="outlined"
      icon="local_taxi"
      >Filter Chip</mty-filter-chip
    >
    <div class="body-medium primary-text">{{ globalToggle }}</div>
  </div>
  <div class="button-box">
    <mty-filter-chip v-model:selected="globalToggle" type="elevated"
      >Filter Chip</mty-filter-chip
    >
    <mty-filter-chip
      v-model:selected="globalToggle"
      type="elevated"
      icon="local_taxi"
      >Filter Chip</mty-filter-chip
    >
    <mty-filter-chip
      v-model:selected="globalToggle"
      disable
      type="elevated"
      >Filter Chip</mty-filter-chip
    >
    <mty-filter-chip
      v-model:selected="globalToggle"
      disable
      type="elevated"
      icon="local_taxi"
      >Filter Chip</mty-filter-chip
    >
    <div class="body-medium primary-text">{{ globalToggle }}</div>
  </div>
  <div class="button-box">
    <mty-input-chip type="outlined">Input Chip</mty-input-chip>
    <mty-input-chip type="outlined" icon="local_taxi"
      >Input Chip</mty-input-chip
    >
    <mty-input-chip disable type="outlined"
      >Input Chip</mty-input-chip
    >
    <mty-input-chip disable type="outlined" icon="local_taxi"
      >Input Chip</mty-input-chip
    >
  </div>
  <div class="button-box">
    <mty-input-chip type="elevated">Input Chip</mty-input-chip>
    <mty-input-chip type="elevated" icon="local_taxi"
      >Input Chip</mty-input-chip
    >
    <mty-input-chip disable type="elevated"
      >Input Chip</mty-input-chip
    >
    <mty-input-chip disable type="elevated" icon="local_taxi"
      >Input Chip</mty-input-chip
    >
  </div>
  <mty-divider />
</template>

<script setup>
import { ref } from 'vue';

const globalToggle = ref(false);

const selected = ref('songs');
const multiSelected = ref(['songs', 'albums']);

const inputText = ref('');
</script>
