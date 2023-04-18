# Common Button

The Common Button is a button that is used in many places in the application. It is a button that has a text and an icon. The icon is optional. The button can be disabled.

## Type

| Name               | Description                               |
| ------------------ | ----------------------------------------- |
| **TonalButton**    | A button that has a tonal background.     |
| **ElevatedButton** | A button that has an elevated background. |
| **TextButton**     | A button that has a text.                 |
| **FilledButton**   | A button that has a filled background.    |
| **OutlinedButton** | A button that has an outlined background. |

## Props

| Name       | Type      | Default      | Description                               |
| ---------- | --------- | ------------ | ----------------------------------------- |
| `type`     | `String`  | `'elevated'` | The type of the button.                   |
| `icon`     | `String`  |              | The name of the icon shown in the button. |
| `iconType` | `String`  | `'material'` | The type of the icon.                     |
| `disabled` | `Boolean` | `false`      | If the button is disabled.                |

### type

Available values:

- `'tonal'`
- `'elevated'`
- `'text'`
- `'filled'`
- `'outlined'`

### icon and iconType

Look at the [Mty Icons](./MtyIcons.md) for more information.

## Events

| Name    | Description                         |
| ------- | ----------------------------------- |
| `click` | Emitted when the button is clicked. |

## slots

| Name      | Description                   |
| --------- | ----------------------------- |
| `default` | The text label of the button. |

## Usage

The following example shows how to use the Common Button. It is a tonal button with an add icon and a label "Add item". When the button is clicked, the `onClick` method is called.

```jsx
// As custom element
<common-button icon="add" type="tonal" @click="onClick">
  Add item
</common-button>

// As component
<CommonButton icon="add" type="tonal" @click="onClick">
  Add item
</CommonButton>
```
