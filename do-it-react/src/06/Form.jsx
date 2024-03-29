import React from 'tutorial/react';
import propTypes from 'prop-types';

import { Provider } from './FormContext';

class FromProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
    };

    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChange(name, updatedValue) {
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue,
        },
      }),
      () => this.validate(this.state.values),
    );
  }
  reset() {
    this.setState({ values: {}, errors: {} });
  }
  submit() {
    this.props.onSubmit(this.state.values);
  }
  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = validate(values);
    this.setState({
      errors,
    });
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors,
          values,
          onChange: this.onChange,
          reset: this.reset,
          submit: this.submit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

FromProvider.propTypes = {
  validte: propTypes.func,
};

export default FromProvider;
