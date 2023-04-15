import '../style/theme.css';

import ElevatedButton from './button/ElevatedButton.vue';
import FilledButton from './button/FilledButton.vue';
import TonalButton from './button/TonalButton.vue';
import OutlinedButton from './button/OutlinedButton.vue';
import TextButton from './button/TextButton.vue';

import FaButton from './button/FAB.vue';
import FaButtonSmall from './button/SmallFAB.vue';
import FaButtonLarge from './button/LargeFAB.vue';

import FaButtonExt from './button/ExtendedFAB.vue';

const install = (app) => {
  app.use(ElevatedButton);
  app.use(FilledButton);
  app.use(TonalButton);
  app.use(OutlinedButton);
  app.use(TextButton);
  app.use(FaButton);
  app.use(FaButtonSmall);
  app.use(FaButtonLarge);
  app.use(FaButtonExt);
};

export {
  ElevatedButton,
  FilledButton,
  TonalButton,
  OutlinedButton,
  TextButton,
  FaButton,
  FaButtonSmall,
  FaButtonLarge,
  FaButtonExt,
};

export default {
  name: 'MtyUI',
  install,
};
