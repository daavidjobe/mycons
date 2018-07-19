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

var Stop = function Stop(props) {
  return _react2.default.createElement(
    _Svg2.default,
    _extends({ viewBox: '0 0 42 42' }, props),
    _react2.default.createElement(
      'g',
      { stroke: '#000000' },
      _react2.default.createElement('path', { d: 'M8.06497116,8.06497116 L34.9350288,34.9350288 M21,41 C32.045695,41 41,32.045695 41,21 C41,9.954305 32.045695,1 21,1 C9.954305,1 1,9.954305 1,21 C1,32.045695 9.954305,41 21,41 Z' })
    )
  );
};

exports.default = Stop;
module.exports = exports['default'];