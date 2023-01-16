import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Spinner from '@components/Spinner';

export default {
  title: '@common/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Flag = Template.bind({});
Flag.args = {conditionFlag: true};

export const Timer = Template.bind({});
Timer.args = {timer: true};
