'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Svg = require('./Svg');

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function Close(props) {
  return _react2.default.createElement(
    _Svg2.default,
    _extends({ viewBox: '0 0 42 42' }, props),
    _react2.default.createElement(
      'g',
      { stroke: '#000000' },
      _react2.default.createElement('circle', { cx: '21', cy: '21', r: '20' }),
      _react2.default.createElement('path', { d: 'M21.2022643,21.5592986 L13.2568399,29.4174107 L21.2022643,21.5592986 L28.9516315,29.2235079 L21.2022643,21.5592986 Z M21.2022643,21.5592986 L28.8568399,13.9888393 L21.2022643,21.5592986 L13.3516315,13.7949365 L21.2022643,21.5592986 Z' })
    )
  );
};

exports.default = Close;
module.exports = exports['default'];