# MtyUI - Material You in Vue3

[![wakatime](https://wakatime.com/badge/user/b2ca97db-bce2-4b9b-8588-23c0de16890a/project/8fa7cd78-9c02-4826-8686-1faa902c2135.svg)](https://wakatime.com/badge/user/b2ca97db-bce2-4b9b-8588-23c0de16890a/project/8fa7cd78-9c02-4826-8686-1faa902c2135)

A [Material You](https://m3.material.io/) UI and components library for Vue3.

## Demo

[https://mtyui.mszook.art/](https://mtyui.mszook.art/)

## Work in progress

| Component           | Status | Last update |
| ------------------- | ------ | ----------- |
| Badges              | WIP    |             |
| Bottom app bar      | WIP    |             |
| Bottom sheets       | WIP    |             |
| Common buttons      | Done   | 2023.04.16  |
| FAB                 | Done   | 2023.04.15  |
| Extend FAB          | Done   | 2023.04.15  |
| Icon buttons        | Done   | 2023.04.16  |
| Segmented buttons   | Done   | 2023.04.16  |
| Cards               | WIP    |             |
| Carousel            | WIP    |             |
| Checkbox            | Done   | 2023.04.17  |
| Chips               | WIP    |             |
| Date pickers        | WIP    |             |
| Dialogs             | WIP    |             |
| Divider             | WIP    |             |
| Lists               | WIP    |             |
| Menus               | WIP    |             |
| Navigation bar      | WIP    |             |
| Navigation drawer   | WIP    |             |
| Navigation rail     | WIP    |             |
| Progress indicators | WIP    |             |
| Radio button        | WIP    |             |
| Search              | WIP    |             |
| Side sheets         | WIP    |             |
| Snackbar            | WIP    |             |
| Switch              | WIP    |             |
| Tabs                | WIP    |             |
| Text fields         | WIP    |             |
| Time pickers        | WIP    |             |
| Tooltips            | WIP    |             |
| Top app bar         | WIP    |             |

## How to use

### As a node module

```bash
TODO
```

### By a CDN

```
TODO
```

### Directly import

First, you need to clone this repo.

```bash
git clone https://github.com/WitchElaina/mty-ui.git
```

Then add the components directory to your project.

```bash
cp ./src/components ./your-project/src/components/MtyUIKits
```

Finally, import the components you need.

```js
import { CommonButton } from './your-project/src/components/MtyUIKits';

// do this in main.js if you use in vue3
app.component('CommonButton', CommonButton);
```

or you can import all components.

```js
import * as MtyUI from './your-project/src/components/MtyUIKits';

// do this in main.js if you use in vue3
app.use(MtyUI);
```
