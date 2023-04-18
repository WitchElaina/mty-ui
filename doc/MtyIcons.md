# Mty Icons

Mty Icons are imported from [Material Design Icons](https://materialdesignicons.com/). Usually, you don't need to import them manually or use them directly. They are used as embedded icons in other components. For example, the [Common Button](./CommonButton.md) uses the Mty Icons as embedded icons. Although it is no need to use them directly, it is still recommended to know how to set attributes of the Mty Icons.

## Props

| Name | Type   | Default    | Description                 |
| ---- | ------ | ---------- | --------------------------- |
| icon | String | 'home'     | The name of the icon.       |
| size | Number | 24         | The size of the icon. px    |
| type | String | 'outlined' | The style type of the icon. |

### icon

The name of the icon. The default value is `'home'`. You can find the name of the icon in the [Material Design Icons](https://materialdesignicons.com/) website.

### size

The size of the icon. The default value is `24`. The unit is `px`.

### type

The style type of the icon. The default value is `'outlined'`. Other available values are `'filled'` , `'two-tone'` , `'sharp'` , `'round'`. You can find the difference between them in the [Material Design Icons](https://materialdesignicons.com/) website.

## Usage

The following example shows how to use the Mty Icons. It is a filled home icon with a size of `48px`.

```jsx
<mty-icon icon="home" size="48" type="filled" />
```
