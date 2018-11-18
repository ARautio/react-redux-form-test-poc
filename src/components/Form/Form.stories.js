import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from './Form';
import Provider from '../../Provider';

storiesOf('Form', module)
	.addDecorator(story => <Provider>{story()}</Provider>)
  .add('default', () => (
    <Form onSave={action('Saving')}/>
  ));