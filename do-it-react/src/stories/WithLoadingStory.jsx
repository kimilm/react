import React from 'tutorial/react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withLoading from '../05/withLoading';

const TextWithLoading = withLoading('로딩중')(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(Button);

storiesOf('withLoading', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithLoading>안녕하세요</ButtonWithLoading>
      <TextWithLoading>안녕하세요</TextWithLoading>
    </div>
  ))
  .addWithJSX('isLoading 예제', () => (
    <div>
      <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
      <TextWithLoading isLoading>안녕하세요</TextWithLoading>
    </div>
  ));
