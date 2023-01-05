import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import BaseButton from '@components/BaseButton';

export default {
  title: '@common/BaseButton',
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = () => (
  <>
    <BaseButton value={'TEST'} onClick={action('버튼 클릭')} />
  </>
);

export const base = Template.bind({});
