# FAB

FAB (Floating Action Button) is a button that is used to perform the primary, or most common, action on a screen. There are two types of FABs: regular FABs and extended FABs.

## Regular FAB

The regular FAB has three different sizes: small, medium, and large. You can use them through different HTML elements: `fa-button-small`, `fa-button`, and `fa-button-large`.

### Props

| Name       | Type     | Default | Description                               |
| ---------- | -------- | ------- | ----------------------------------------- |
| `icon`     | `String` |         | The name of the icon shown in the button. |
| `iconType` | `String` |         | The type of the mty-icon.                 |

#### icon and iconType

Icon and iconType describe the icon shown in the button. Look at the [Mty Icons](./MtyIcons.md) for more information.

### Events

| Name    | Description                         |
| ------- | ----------------------------------- |
| `click` | Emitted when the button is clicked. |

### Examples

The following example shows a FAB with the `add` round icon in three different sizes.

```vue
<fa-button-small icon="add" iconType="round"></fa-button-small>
<fa-button icon="add" iconType="round"></fa-button>
<fa-button-large icon="add" iconType="round"></fa-button-large>
```

## Extended FAB

The extended FAB is a FAB with a label. You can use it through the `fa-button-ext` HTML element.

### Props

| Name       | Type     | Default | Description                               |
| ---------- | -------- | ------- | ----------------------------------------- |
| `icon`     | `String` |         | The name of the icon shown in the button. |
| `iconType` | `String` |         | The type of the mty-icon.                 |
| `label`    | `String` |         | The label shown in the button.            |

#### icon and iconType

Icon and iconType describe the icon shown in the button. Look at the [Mty Icons](./MtyIcons.md) for more information.

#### label

Label describes the label shown in the button.

### Events

| Name    | Description                         |
| ------- | ----------------------------------- |
| `click` | Emitted when the button is clicked. |

### Examples

The following example shows an extended FAB with the `add` round icon and the label `Add`.

```vue
<fa-button-ext
  icon="add"
  iconType="round"
  label="Add"
></fa-button-ext>
```
