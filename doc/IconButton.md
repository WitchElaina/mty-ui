# Icon Button

Icon Button is a button that is used to perform the secondary action on a screen. There are two different icon buttons whose usage is different. Regular icon button is used to provide a clickable button with an icon. Toggle icon button is used to provide a switchable button with an icon. Both of them have four different styles: filled, filled-tonal, outlined, and standard.

## Regular icon button

Regular icon button is used to provide a clickable button with an icon. You can use it through the `icon-button` HTML element.

### Props

| Name       | Type      | Default    | Description                               |
| ---------- | --------- | ---------- | ----------------------------------------- |
| `type`     | `String`  | `'filled'` | The style type of the icon button.        |
| `icon`     | `String`  |            | The name of the icon shown in the button. |
| `iconType` | `String`  |            | The type of the mty-icon.                 |
| `disable`  | `Boolean` | `false`    | Whether the button is disabled.           |

#### type

| Value            | Description                                     |
| ---------------- | ----------------------------------------------- |
| `'filled'`       | Filled icon button.                             |
| `'filled-tonal'` | Filled icon button with tonal background color. |
| `'outlined'`     | Outlined icon button.                           |
| `'standard'`     | Standard icon button.                           |

#### icon and iconType

Icon and iconType describe the icon shown in the button. Look at the [Mty Icons](./MtyIcons.md) for more information.

#### disable

Disable describes whether the button is disabled. You can set it easily through the `disable` attribute.

```vue
<icon-button disable />
```

### Events

| Name    | Description                         |
| ------- | ----------------------------------- |
| `click` | Emitted when the button is clicked. |

### Examples

The following example shows a standard icon button with the `add` round icon in four different styles. When you click the button, the `onClick` method will be called.

```vue
<icon-button
  type="standard"
  icon="add"
  iconType="round"
  @click="onClick"
/>
```

## Toggle icon button

Toggle icon button is used to provide a switchable button with an icon. You can use it through the `icon-toggle-button` HTML element.

### Props

| Name       | Type      | Default    | Description                               |
| ---------- | --------- | ---------- | ----------------------------------------- |
| `type`     | `String`  | `'filled'` | The style type of the icon button.        |
| `icon`     | `String`  |            | The name of the icon shown in the button. |
| `iconType` | `String`  |            | The type of the mty-icon.                 |
| `disable`  | `Boolean` | `false`    | Whether the button is disabled.           |
| `toggled`  | `Boolean` | `false`    | Whether the button is toggled.            |

The `toggle` prop is the model value. You can get more information on the following section. The other props are the same as the regular icon button.

### Events

| Name             | Description                                         |
| ---------------- | --------------------------------------------------- |
| `update:toggled` | Emitted when the button's toggled value is changed. |

### v-model

| Name      | Type      |
| --------- | --------- |
| `toggled` | `Boolean` |

Toggle icon button supports `v-model` binding. The `toggled` prop is the model value. When the button is toggled, the model value will be changed.

The following codes shows how to use `v-model` binding. When you click the button, the `toggle` value will be changed.

```vue
<icon-toggle-button v-model:toggled="toggle" />
```

### Examples

The following example shows a toggle icon button with the `add` round icon in four different styles. When you click the button, the `toggle` value will be changed.

```vue
<icon-toggle-button
  type="standard"
  icon="add"
  iconType="round"
  v-model:toggled="toggle"
/>
```
