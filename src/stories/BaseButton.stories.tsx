import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import BaseButton from '@components/BaseButton';

export default {
  title: '@common/BaseButton',
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: 'TEST',
  onClick: action('버튼 클릭'),
};
