import React from 'react';
import branch from 'recompose/branch';

import Button from '../04/Button';

function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return <Button disabled>로딩중</Button>;
}

export default branch(isLoading, () => LoadingButton)(Button);

//위의 과정은 이렇게 표현할 수 있다
// export default branch(
//   ({ isLoading }) => isLoading,
//   () => () => <Button disabled>로딩중</Button>,
// );
