# TextField

TextField is a component that allows users to input text. There are two different types of text fields: Outlined Text Field and Filled Text Field. The usage of the two types is the same.

## Props

| Name             | Type       | Default      | Description                                            |
| ---------------- | ---------- | ------------ | ------------------------------------------------------ |
| `type`           | `String`   | `'outlined'` | The type of the text field.                            |
| `label`          | `String`   |              | The label of the text field.                           |
| `placeholder`    | `String`   |              | The placeholder of the text field.                     |
| `icon`           | `String`   | `''`         | The name of the icon shown in the text field.          |
| `iconType`       | `String`   | `''`         | The type of the mty-icon.                              |
| `trailingIcon`   | `String`   | `''`         | The name of the trailing icon shown in the text field. |
| `supportingText` | `String`   | `''`         | The supporting text shown in the text field.           |
| `disabled`       | `Bool`     | `false`      | Whether the text field is disabled.                    |
| `error`          | `Bool`     | `false`      | Whether the text field is in error state.              |
| `inputText`      | `String`   | `''`         | The input text.                                        |
| `prefix`         | `String`   | `''`         | The prefix of the text field.                          |
| `suffix`         | `String`   | `''`         | The suffix of the text field.                          |
| `validator`      | `Function` |              | The validator function.                                |

### type

| Value        | Description          |
| ------------ | -------------------- |
| `'outlined'` | Outlined text field. |
| `'filled'`   | Filled text field.   |

### icon and iconType

Icon and iconType describe the icon shown in the text field. Look at the [Mty Icons](./MtyIcons.md) for more information.

### validator

The validator function is used to validate the input text. It takes the input text as the argument and returns a boolean value. If the value is `true`, the input text is valid. Otherwise, the input text is invalid.

## v-model

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| `inputText` | `String` |             |

## Events

| Name               | Description                             |
| ------------------ | --------------------------------------- |
| `update:inputText` | Emitted when the input text is changed. |

## Examples

The following example shows a outlined text field with the `search` round icon. The input variable is bound to the `inputText` prop as the model value. When you type in the text field, it will be updated.

```vue
<text-field
  type="outlined"
  label="Search"
  icon="search"
  iconType="round"
  v-model:inputText="input"
/>

<script setup>
const input = ref('');
</script>
```
