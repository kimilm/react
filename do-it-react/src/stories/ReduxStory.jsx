import React from 'tutorial/react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';

import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';
import AdvReduxApp06 from '../07/AdvReduxApp06';
import AdvReduxApp07 from '../07/AdvReduxApp07';
import AdvReduxApp08 from '../07/AdvReduxApp08';
import SearchFilterReduxApp from '../07/SearchFilterReduxApp';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 스토어 예제', () => <ReduxApp01 />)
  .addWithJSX('dispatch 예제', () => <ReduxApp02 />)
  .addWithJSX('reducer 예제', () => <ReduxApp03 />)
  .addWithJSX('AdvReduxApp 예제 01', () => <AdvReduxApp01 />)
  .addWithJSX('AdvReduxApp 예제 02', () => <AdvReduxApp02 />)
  .addWithJSX('AdvReduxApp 예제 03', () => <AdvReduxApp03 />)
  .addWithJSX('AdvReduxApp 예제 04', () => <AdvReduxApp04 />)
  .addWithJSX('AdvReduxApp 예제 05', () => <AdvReduxApp05 />)
  .addWithJSX('AdvReduxApp 예제 06', () => <AdvReduxApp06 />)
  .addWithJSX('AdvReduxApp 예제 07', () => <AdvReduxApp07 />)
  .addWithJSX('AdvReduxApp 예제 08', () => <AdvReduxApp08 />)
  .addWithJSX('SearchFilterReduxApp 예제', () => <SearchFilterReduxApp />);
