import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel)

import Button from '../src/cmps/button/Button';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('primary1', () => (
    <Button value="primary" isDisabled={true}
      onClick={() => console.log('button clicked')} />
  ))
  .add('primary2', () => (
    <Button value="primary" isDisabled={false} />
  ))
  .add('secondary1', () => (
    <Button value="secondary" isDisabled={true}
      onClick={() => console.log('button clicked')} />
  ))
  .add('secondary2', () => (
    <Button value="secondary" isDisabled={false} />
  ))
  .add('tertiary1', () => (
    <Button value="tertiary" isDisabled={true}
      onClick={() => console.log('button clicked')} />
  ))
  .add('tertiary2', () => (
    <Button value="tertiary" isDisabled={false} />
  ));
