import React, { PureComponent } from 'tutorial/react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import ButtonWithContext from './ButtonWithContext';

function RowBCompoment() {
  return <Button>버튼</Button>;
}

function RowCCompoment() {
  return <ButtonWithContext>버튼</ButtonWithContext>;
}

function TableCompoment() {
  return (
    <table>
      <RowBCompoment />
      <RowCCompoment />
    </table>
  );
}

class HomePageComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  getChildContext() {
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  render() {
    return (
      <div>
        <TableCompoment />
        <Button onPress={this.toggleLoading}>상태 변경</Button>
      </div>
    );
  }
}

HomePageComponent.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default HomePageComponent;
