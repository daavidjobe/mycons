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

var ArrowRight = function ArrowRight(props) {
  return _react2.default.createElement(
    _Svg2.default,
    _extends({ viewBox: '0 0 42 42' }, props),
    _react2.default.createElement(
      'g',
      { stroke: '#000000' },
      _react2.default.createElement('polyline', { transform: 'translate(20.762124, 20.833333) rotate(180.000000) translate(-20.762124, -20.833333) ', points: '29.5242474 5 12 20.931134 29.5242474 36.6666667' })
    )
  );
};

exports.default = ArrowRight;
module.exports = exports['default'];