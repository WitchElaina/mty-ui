import './style/theme.css';

import MtyIcons from './components/icons/MtyIcons.vue';

import CommonButton from './components/button/CommonButton.vue';

import FaButton from './components/button/FAB.vue';
import FaButtonSmall from './components/button/SmallFAB.vue';
import FaButtonLarge from './components/button/LargeFAB.vue';
import FaButtonExt from './components/button/ExtendedFAB.vue';

import IconButton from './components/button/IconButton.vue';
import IconToggleButton from './components/button/IconToggleButton.vue';

import SegmentedButton from './components/button/SegmentedButton.vue';
import MultiSegmentedButton from './components/button/MultiSegmentedButton.vue';

import MtyCheckbox from './components/checkbox/Checkbox.vue';

import TextField from './components/TextField.vue';

import MtyAssistChip from './components/chip/AssistChip.vue';
import MtyFilterChip from './components/chip/FilterChip.vue';
import MtyInputChip from './components/chip/InputChip.vue';

import MtyDivider from './components/Divider.vue';

import MtyNavRail from './components/navigation/NavigationRail.vue';

const install = (app) => {
  app.use(MtyIcons);
  app.use(CommonButton);
  app.use(FaButton);
  app.use(FaButtonSmall);
  app.use(FaButtonLarge);
  app.use(FaButtonExt);
  app.use(IconButton);
  app.use(IconToggleButton);
  app.use(SegmentedButton);
  app.use(MultiSegmentedButton);
  app.use(MtyCheckbox);
  app.use(TextField);
  app.use(MtyAssistChip);
  app.use(MtyFilterChip);
  app.use(MtyInputChip);
  app.use(MtyDivider);
  app.use(MtyNavRail);
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
  SegmentedButton,
  MultiSegmentedButton,
  MtyCheckbox,
  TextField,
  MtyAssistChip,
  MtyFilterChip,
  MtyInputChip,
  MtyDivider,
  MtyNavRail,
};

export default {
  name: 'MtyUI',
  install,
};
