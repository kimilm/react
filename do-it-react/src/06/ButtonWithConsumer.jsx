import React from 'tutorial/react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Comsumer = createLoadingConsumer('loading2');

function ButtonWithConsumer({ children }) {
  return (
    <React.Fragment>
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트1로딩중' : children}
          </Button>
        )}
      />
      <Loading2Comsumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트2로딩중' : children}
          </Button>
        )}
      />

      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <loading2Consumer
            render={({ loading: loading2 }) => (
              <Button onPress={() => setLoading(!loading)}>
                {loading || loading2 ? '로딩중' : children}
              </Button>
            )}
          />
        )}
      />
    </React.Fragment>
  );
}

ButtonWithConsumer.propTypes = {
  children: PropTypes.string,
};

export default ButtonWithConsumer;
