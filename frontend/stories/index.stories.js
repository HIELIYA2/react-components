import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../src/cmps/button/Button';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('primary', () => (
    <Button value="primary" isDisabled="default" />
  ))
  .add('primary1', () => (
    <Button value="primary" isDisabled="disabled" />
  ));
