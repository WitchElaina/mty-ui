# Chip

## Overview

Chips are compact elements that represent an input, attribute, or action. They are typically used to display a collection of related values, such as a set of tags. There are three types of chips which has different functionalities: `assist`, `filter`, and `input`.

## Assist Chip

`<mty-assist-chip>`

Assist chips are used to display information that is not interactive. They are typically used to display a collection of related values, such as a set of tags.

### Props

| Name       | Type     | Default      | Description                             |
| ---------- | -------- | ------------ | --------------------------------------- |
| `icon`     | `String` | `''`         | The name of the icon shown in the chip. |
| `iconType` | `String` | `''`         | The type of the mty-icon.               |
| `type`     | `String` | `'outlined'` | The style type of the chip.             |
| `disable`  | `Bool`   | `false`      | Whether the chip is disabled.           |

### Slots

| Name      | Description                 |
| --------- | --------------------------- |
| `Default` | Default slot for the label. |

### Emits

| Name    | Description                       |
| ------- | --------------------------------- |
| `click` | Emitted when the chip is clicked. |

## Filter Chip

`<mt-filtery-chip>`

Filter chips are used to display information that is not interactive. They are typically used to display a collection of related values, such as a set of tags.

### Props

| Name       | Type     | Default      | Description                             |
| ---------- | -------- | ------------ | --------------------------------------- |
| `icon`     | `String` | `''`         | The name of the icon shown in the chip. |
| `iconType` | `String` | `''`         | The type of the mty-icon.               |
| `type`     | `String` | `'outlined'` | The style type of the chip.             |
| `disable`  | `Bool`   | `false`      | Whether the chip is disabled.           |
| `selected` | `Bool`   | `false`      | Whether the chip is selected.           |

### Slots

| Name      | Description                 |
| --------- | --------------------------- |
| `Default` | Default slot for the label. |

### V-model

| Name       | type   | Description                   |
| ---------- | ------ | ----------------------------- |
| `selected` | `Bool` | Whether the chip is selected. |

### Emits

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| `update:selected` | Emitted when the chip's selected state is changed. |

## Input Chip

`<mty-input-chip>`

Input chips are used to display information that is not interactive. They are typically used to display a collection of related values, such as a set of tags.

### Props

| Name           | Type     | Default      | Description                             |
| -------------- | -------- | ------------ | --------------------------------------- |
| `icon`         | `String` | `''`         | The name of the icon shown in the chip. |
| `iconType`     | `String` | `''`         | The type of the mty-icon.               |
| `type`         | `String` | `'outlined'` | The style type of the chip.             |
| `disable`      | `Bool`   | `false`      | Whether the chip is disabled.           |
| `trailingIcon` | `Bool`   | `true`       | Whether the chip has a trailing icon.   |

### Slots

| Name      | Description                 |
| --------- | --------------------------- |
| `Default` | Default slot for the label. |

### Emits

| Name    | Description                       |
| ------- | --------------------------------- |
| `click` | Emitted when the chip is clicked. |
