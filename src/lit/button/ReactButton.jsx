import React from 'react';

import 'reflect-metadata';
import { TestButton } from './lit-button';

const createComponent = require('@lit-labs/react').createComponent;

export const Button = createComponent({
  tagName: 'lit-button',
  elementClass: TestButton,
  react: React,
});
