# MtyUI - Material You in Vue3

A [Material You](https://m3.material.io/) UI and components library for Vue3.

## Demo

[https://mtyui.mszook.art/](https://mtyui.mszook.art/)

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
import { MtyButton } from './your-project/src/components/MtyUIKits';

// do this in main.js if you use in vue3
app.component('MtyButton', MtyButton);
```

or you can import all components.

```js
import * as MtyUI from './your-project/src/components/MtyUIKits';

// do this in main.js if you use in vue3
app.use(MtyUI);
```
