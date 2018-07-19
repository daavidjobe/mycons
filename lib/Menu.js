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

var Menu = function Menu(props) {
  return _react2.default.createElement(
    _Svg2.default,
    _extends({ viewBox: '0 0 42 42' }, props),
    _react2.default.createElement(
      'g',
      { stroke: '#000000' },
      _react2.default.createElement('circle', { cx: '21', cy: '21', r: '20' }),
      _react2.default.createElement('path', { d: 'M30.1666667,21.8333333 L11.8333333,21.8333333 M30.1666667,15.1666667 L11.8333333,15.1666667 M30.1666667,28.5 L11.8333333,28.5' })
    )
  );
};

exports.default = Menu;
module.exports = exports['default'];