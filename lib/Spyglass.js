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

var Spyglass = function Spyglass(props) {
  return _react2.default.createElement(
    _Svg2.default,
    _extends({ viewBox: '0 0 42 42' }, props),
    _react2.default.createElement(
      'g',
      { stroke: '#000000' },
      _react2.default.createElement('path', { d: 'M40.1666667,40.1666667 L30.1666667,30.1666667 L40.1666667,40.1666667 Z M18.5,34.3333333 C8.83501688,34.3333333 1,26.8714125 1,17.6666667 C1,8.46192084 8.83501688,1 18.5,1 C28.1649831,1 36,8.46192084 36,17.6666667 C36,26.8714125 28.1649831,34.3333333 18.5,34.3333333 Z' })
    )
  );
};

exports.default = Spyglass;
module.exports = exports['default'];