// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';
import 'jest-styled-components';

Object.defineProperty(window.location, 'href', {
    writable: true,
    value: 'some url'
})
