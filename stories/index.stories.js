import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '../src/cmps/button/Button';
import Tags from '../src/cmps/tags/Tags';
import Tag from '../src/cmps/tag/Tag';
import TextToSay from '../src/cmps/textToSay/textToSay';

storiesOf('Button')
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

storiesOf('TextToSay')
  .addDecorator(withKnobs)
  .add('catalogue', () => (
    <>
      <h1>TextToSay</h1>
      <TextToSay text="Hello world" />
    </>
  ))
  .add('playground', () => <TextToSay text={text('value', 'Hello world')} />);
