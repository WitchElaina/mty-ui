import '../style/theme.css';

import ElevatedButton from './button/ElevatedButton.vue';
import FilledButton from './button/FilledButton.vue';
import TonalButton from './button/TonalButton.vue';
import OutlinedButton from './button/OutlinedButton.vue';
import TextButton from './button/TextButton.vue';

const install = (app) => {
  app.use(ElevatedButton);
  app.use(FilledButton);
  app.use(TonalButton);
  app.use(OutlinedButton);
  app.use(TextButton);
};

export {
  ElevatedButton,
  FilledButton,
  TonalButton,
  OutlinedButton,
  TextButton,
};

export default {
  name: 'MtyUI',
  install,
};
