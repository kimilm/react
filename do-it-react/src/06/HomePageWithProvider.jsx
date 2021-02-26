import React, { PureComponent } from 'react';
import LoadingProvider from './LoadingProvider';
import Button from '../04/Button';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';

function RowBCompoment() {
  return <Button>버튼</Button>;
}

function RowCCompoment() {
  return <ButtonWithLoadingContext label="버튼" />;
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
  render() {
    return (
      <LoadingProvider>
        <TableCompoment />
        <ButtonWithLoadingContext label="상태 변경" />
      </LoadingProvider>
    );
  }
}
export default HomePageComponent;
