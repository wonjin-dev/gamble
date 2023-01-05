import React from 'react';
import {action} from '@storybook/addon-actions';
import BaseButton from '@components/BaseButton';

const Template = {title: '@common/BaseButton', component: BaseButton};

export const Default = () => <BaseButton value={'TEST'} onClick={action('버튼 클릭')} />;

export default Template;
