import compose from 'recompose/compose';
import withLoading from './withLoading';
import withState from './withState';

const withLoadDate = withState('isLoading', 'setIsLoading', false);
function Component() {
  return '완료(컴포넌트 출력)';
}
const ComponentWithLoading = withLoading('로딩중')(Component);
const ComponentWithLoadingData = withLoadingData(Component);

const withLoadingAndLoadData = compose(wihtLoadingData, withLoading('로딩중'));

export const ComponentWithBoth = withLoadingAndLoadData(Component);
