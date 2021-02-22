import React from 'react';

export default function (loadingMessage = '로딩중') {
  return function withLoading(WrappedCompoment) {
    const { displayName, name: componentName } = WrappedCompoment;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;

      return <WrappedCompoment {...otherProps} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}
