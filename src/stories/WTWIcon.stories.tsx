import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import WTWIcon from '../react';
import { WTWIconProps } from '../react/WTWIcon';

export default {
    title: 'WTW Icons/WTWIcon',
    component: WTWIcon,
} as Meta;

const Template: Story<WTWIconProps> = (args) => <WTWIcon width="200px" height="200px" {...args} />;

export const WTWIconComponent = Template.bind({});
WTWIconComponent.args = {
    icon: 'wtwlogo',
};
