import '../style/theme.css';

import MtyIcons from './icons/MtyIcons.vue';

import CommonButton from './button/CommonButton.vue';

import FaButton from './button/FAB.vue';
import FaButtonSmall from './button/SmallFAB.vue';
import FaButtonLarge from './button/LargeFAB.vue';
import FaButtonExt from './button/ExtendedFAB.vue';

import IconButton from './button/IconButton.vue';
import IconToggleButton from './button/IconToggleButton.vue';

const install = (app) => {
  app.use(MtyIcons);
  app.use(CommonButton);
  app.use(FaButton);
  app.use(FaButtonSmall);
  app.use(FaButtonLarge);
  app.use(FaButtonExt);
  app.use(IconButton);
  app.use(IconToggleButton);
};

export {
  MtyIcons,
  CommonButton,
  FaButton,
  FaButtonSmall,
  FaButtonLarge,
  FaButtonExt,
  IconButton,
  IconToggleButton,
};

export default {
  name: 'MtyUI',
  install,
};
