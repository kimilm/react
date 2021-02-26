import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from './withStyles';

class Text extends PureComponent {
  render() {
    const {
      children,
      bold,
      light,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      inverse,
    } = this.props;
    return (
      <span
        {...css(
          styles.default,
          bold && styles.bold,
          light && styles.light,
          large && styles.large,
          xlarge && styles.xlarge,
          small && styles.small,
          xsmall && styles.xsmall,
          primary && styles.primary,
          secondary && styles.secondary,
          inverse && styles.inverse,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  styles: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  inverse: PropTypes.bool,
};

export default withStyles(({ color, fontWeight, size, lineHeight }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    fontWeight: fontWeight.normal,
  },
  xlarge: {
    fontSize: size.xg,
    lineHeight: lineHeight.xg,
  },
  large: {
    fontSize: size.lg,
    lineHeight: lineHeight.lg,
  },
  xsmall: {
    fontSize: size.xs,
    lineHeight: lineHeight.xs,
  },
  small: {
    fontSize: size.sm,
    lineHeight: lineHeight.sm,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
  light: {
    fontWeight: fontWeight.light,
  },
  bold: {
    fontWeight: fontWeight.bold,
  },
  inverse: {
    color: color.wihte,
  },
}))(Text);
