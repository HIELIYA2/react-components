import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import Button from '../src/cmps/button/Button';
import Tags from '../src/cmps/tags/Tags';
import Tag from '../src/cmps/tag/Tag';

library.add(faStroopwafel);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('catalogue', () => (
    <>
      <h1>Primary</h1>
      <Button value="primary" isDisabled />
      <h1>Primary Disabled</h1>
      <Button value="primary" isDisabled={false} />
      <h1>Secondary</h1>
      <Button value="secondary" isDisabled />
      <h1>Secondary Disabled</h1>
      <Button value="secondary" isDisabled={false} />
      <h1>Tertiary</h1>
      <Button value="tertiary" isDisabled />
      <h1>Tertiary Disabled</h1>
      <Button value="tertiary" isDisabled={false} />
    </>
  ))
  .add('playground', () => <Button value={text('value', 'primary')} isDisabled={boolean('isDisabled', true)} />);

storiesOf('Tags')
  .addDecorator(withKnobs)
  .add('catalogue', () => (
    <>
      <h1>Tags</h1>
      <Tags />
    </>
  ))
  .add('playground', () => <Tag value={text('value', 'I am tag')} isDeletable={boolean('isDeletable', false)} />);
