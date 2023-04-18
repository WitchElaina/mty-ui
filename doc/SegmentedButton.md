# Segemented Button

Segmented Button is a button that is used to perform the primary, or most common, action on a screen. There are two types of Segmented Buttons: single select segmented buttons and multi select segmented buttons.

## Single Select Segmented Button

The single select segmented button has three different sizes: small, medium, and large. You can use them through different HTML elements: `segmented-button`.

### Props

| Name       | Type     | Default | Description                      |
| ---------- | -------- | ------- | -------------------------------- |
| `options`  | `Array`  |         | The options shown in the button. |
| `selected` | `String` |         | The id of the selected option.   |

#### options

Options describe the options shown in the button. Each option is an object with the following properties:

| Key        | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| `id`       | `String`  | The id of the option.                      |
| `label`    | `String`  | The label of the option.                   |
| `icon`     | `String`  | The name of the icon shown in the button.  |
| `iconType` | `String`  | The type of the mty-icon.                  |
| `disabled` | `Boolean` | Whether the option is disabled.            |
| `toggle`   | `Boolean` | Whether the option is selected by default. |

#### selected

Selected describes the id of the selected option. It is a v-model that is updated when the user selects an option.

### v-model

| Name       | Type     | Description                    |
| ---------- | -------- | ------------------------------ |
| `selected` | `String` | The id of the selected option. |

Segmented Button is a v-model component. It means that you can use `v-model` to bind the `selected` prop to a variable.

### Events

| Name              | Description                              |
| ----------------- | ---------------------------------------- |
| `update:selected` | Emitted when the user selects an option. |

### Examples

The following example shows a single select segmented button with three options.

```vue
<template>
  <segmented-button :options="options" v-model="selected" />
</template>

<script setup>
import { ref } from 'vue';

const options = [
  {
    id: 'option1',
    label: 'Option 1',
    icon: 'add',
    iconType: 'round',
  },
  {
    id: 'option2',
    label: 'Option 2',
    icon: 'add',
    iconType: 'round',
  },
  {
    id: 'option3',
    label: 'Option 3',
    icon: 'add',
    iconType: 'round',
  },
];

const selected = ref('option1');
</script>
```

## Multi Select Segmented Button

The multi select segmented button has three different sizes: small, medium, and large. You can use them through different HTML elements: `multi-segmented-button`.

### Props

| Name       | Type    | Default | Description                      |
| ---------- | ------- | ------- | -------------------------------- |
| `options`  | `Array` |         | The options shown in the button. |
| `selected` | `Array` |         | The ids of the selected options. |

#### options

Options describe the options shown in the button. Each option is an object with the following properties:

| Key        | Type      | Description                               |
| ---------- | --------- | ----------------------------------------- |
| `id`       | `String`  | The id of the option.                     |
| `label`    | `String`  | The label of the option.                  |
| `icon`     | `String`  | The name of the icon shown in the button. |
| `iconType` | `String`  | The type of the mty-icon.                 |
| `disabled` | `Boolean` | Whether the option is disabled.           |
| `toggle`   | `Boolean` | Whether the option is selected.           |

#### selected

Selected is an array of ids of the selected options. It is a v-model that is updated when the user selects an option.

### v-model

| Name       | Type    | Description                      |
| ---------- | ------- | -------------------------------- |
| `selected` | `Array` | The ids of the selected options. |

Multi Segmented Button is a v-model component. It means that you can use `v-model` to bind the `selected` prop to a variable.

### Events

| Name              | Description                              |
| ----------------- | ---------------------------------------- |
| `update:selected` | Emitted when the user selects an option. |

### Examples

The following example shows a multi select segmented button with three options.

```vue
<template>
  <multi-segmented-button :options="options" v-model="selected" />
</template>

<script setup>
import { ref } from 'vue';

const options = [
  {
    id: 'option1',
    label: 'Option 1',
    icon: 'add',
    iconType: 'round',
  },
  {
    id: 'option2',
    label: 'Option 2',
    icon: 'add',
    iconType: 'round',
  },
  {
    id: 'option3',
    label: 'Option 3',
    icon: 'add',
    iconType: 'round',
  },
];

const selected = ref(['option1']);
</script>
```
