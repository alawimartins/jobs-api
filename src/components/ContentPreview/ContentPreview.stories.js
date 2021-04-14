import React from 'react';

import { ToggleSwitch } from './ToggleSwitch';

export default {
  title: 'Example/ToggleSwitch',
  component: ToggleSwitch,
};

const Template = (args) => <ToggleSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: true,
};
