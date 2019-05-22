import React, { Component } from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button.jsx';

storiesOf('cmps/button', module)
    .add('new button', () => (
        <Button onClick={action('clicked')}
            value="primary"
            isDisabled="default"
        />
    )); 