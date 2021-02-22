import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../03/Input';

// storiesOf('Input', module)
//   .add('기본 설정', () => <Input name="name" />)
//   .add('label 예제', () => <Input name="name" label="이름" />)
//   .add('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />);

storiesOf('Input', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('onChange 예제', () => (
    <Input name="name" onChange={action('onChange 이벤트 발생')} />
  ));
