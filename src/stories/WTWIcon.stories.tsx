import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { WTWIcon } from '../react';
import { WTWIconProps } from '../react/types';

export default {
    title: 'WTW Icons/WTWIcon',
    component: WTWIcon,
} as Meta;

const Template: Story<WTWIconProps> = (args) => (
    <WTWIcon width="200px" height="200px" style={{ border: '1px solid black' }} {...args} />
);

export const WTWIconComponent = Template.bind({});
WTWIconComponent.args = {
    icon: 'wtwlogo',
    color: '#000',
};
