import { configure, setAddon } from '@storybook/react'
// 자동 스토리 추가
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault'
import JSXAddon from 'storybook-addon-jsx'

import '../src/sass/materialize.scss';

// function loadStories() {
//     require('../src/stories/InputStory');
//     // 스토리 파일을 여기에 추가 가능
//     require('../src/stories/NewCounterStory');
// }

function loadStories() {
    const context = require.context('../src/stories', true, /Story\.jsx$/);
    context.keys().forEach((srcFile) => {
        interopRequireDefault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);